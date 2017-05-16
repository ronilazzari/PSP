#include "TransferFunction.h"
#include "TransferFunctionForm.h"

TransferFunction::TransferFunction(int id) : ControlElement(id)
{
    // Superscript unicode numbers
    m_supNumber[0] = L'\u2070';
    m_supNumber[1] = L'\u00B9';
    m_supNumber[2] = L'\u00B2';
    m_supNumber[3] = L'\u00B3';
    m_supNumber[4] = L'\u2074';
    m_supNumber[5] = L'\u2075';
    m_supNumber[6] = L'\u2076';
    m_supNumber[7] = L'\u2077';
    m_supNumber[8] = L'\u2078';
    m_supNumber[9] = L'\u2079';

    m_numerator.clear();
    m_numerator.push_back(1);
    m_denominator.clear();
    m_denominator.push_back(1);
    m_denominator.push_back(1);
    UpdateTFText();

    Node* node1 = new Node(m_position + wxPoint2DDouble(-m_width / 2, 0), Node::NODE_IN, m_borderSize);
    node1->StartMove(m_position);
    Node* node2 = new Node(m_position + wxPoint2DDouble(m_width / 2, 0), Node::NODE_OUT, m_borderSize);
    node2->SetAngle(180.0);
    node2->StartMove(m_position);
    m_nodeList.push_back(node1);
    m_nodeList.push_back(node2);
}

TransferFunction::~TransferFunction() {}
void TransferFunction::Draw(wxPoint2DDouble translation, double scale) const
{
    glLineWidth(1.0);
    if(m_selected) {
        glColor4dv(m_selectionColour.GetRGBA());
        double borderSize = (m_borderSize * 2.0 + 1.0) / scale;
        DrawRectangle(m_position, m_width + borderSize, m_height + borderSize);
    }
    glColor4d(1.0, 1.0, 1.0, 1.0);
    DrawRectangle(m_position, m_width, m_height);
    glColor4d(0.0, 0.0, 0.0, 1.0);
    DrawRectangle(m_position, m_width, m_height, GL_LINE_LOOP);

    std::vector<wxPoint2DDouble> linePts;
    linePts.push_back(wxPoint2DDouble(m_position.m_x - m_width / 2 + 5 + m_borderSize, m_position.m_y));
    linePts.push_back(wxPoint2DDouble(m_position.m_x + m_width / 2 - 5 - m_borderSize, m_position.m_y));
    DrawLine(linePts);

    DrawNodes();

    glEnable(GL_TEXTURE_2D);
    glColor4d(0.0, 0.0, 0.0, 1.0);
    m_glStringNum->bind();
    m_glStringNum->render(m_position.m_x, m_position.m_y - m_height / 4);
    m_glStringDen->bind();
    m_glStringDen->render(m_position.m_x, m_position.m_y + m_height / 4);
    glDisable(GL_TEXTURE_2D);
}

void TransferFunction::SetText(wxString numerator, wxString denominator)
{
    wxFont font(m_fontSize, wxFONTFAMILY_DEFAULT, wxFONTSTYLE_NORMAL, wxFONTWEIGHT_NORMAL);
    wxScreenDC dc;

    if(m_glStringNum) {
        delete m_glStringNum;
        m_glStringNum = NULL;
    }
    m_glStringNum = new wxGLString(numerator);
    m_glStringNum->setFont(font);
    m_glStringNum->consolidate(&dc);

    if(m_glStringDen) {
        delete m_glStringDen;
        m_glStringDen = NULL;
    }
    m_glStringDen = new wxGLString(denominator);
    m_glStringDen->setFont(font);
    m_glStringDen->consolidate(&dc);

    double nWidth = m_glStringNum->getWidth() + 5 + m_borderSize;
    double dWidth = m_glStringDen->getWidth() + 5 + m_borderSize;

    m_width = nWidth > dWidth ? nWidth : dWidth;
    m_height = m_glStringNum->getheight() + m_glStringDen->getheight() + 2 * m_borderSize;
    SetPosition(m_position);  // Update rect properly.
}

wxString TransferFunction::GetSuperscriptNumber(int number)
{
    wxString strNumber = wxString::Format("%d", number);
    wxString superscriptStr = "";
    for(int i = 0; i < (int)strNumber.length(); ++i) {
        wxString digitStr = strNumber[i];
        long digit = 0;
        digitStr.ToLong(&digit);
        superscriptStr += wxString(m_supNumber[digit]);
    }
    return superscriptStr;
}

void TransferFunction::GetTFString(wxString& numerator, wxString& denominator)
{
    numerator = "";
    denominator = "";
    int index = static_cast<int>(m_numerator.size()) - 1;
    for(auto it = m_numerator.begin(), itEnd = m_numerator.end(); it != itEnd; ++it) {
        double value = *it;
        if(value != 0.0) {
            wxString signal;
            if(index == static_cast<int>(m_numerator.size()) - 1) {
                if(value >= 0.0)
                    signal += "";
                else
                    signal += "-";
            } else {
                if(value >= 0.0)
                    signal += "+ ";
                else
                    signal += "- ";
            }

            if(index == 0) {
                numerator += signal + StringFromDouble(std::abs(value), 0);
                break;
            } else if(index == 1) {
                if(value == 1.0) {
                    numerator += signal + "s";
                } else {
                    numerator += signal + StringFromDouble(std::abs(value), 0) + "s";
                }
            } else {
                if(value == 1.0) {
                    numerator += signal + "s" + GetSuperscriptNumber(index);
                } else {
                    numerator += signal + StringFromDouble(std::abs(value), 0) + "s" + GetSuperscriptNumber(index);
                }
            }
            numerator += " ";
        }
        --index;
    }

    index = static_cast<int>(m_denominator.size()) - 1;
    for(auto it = m_denominator.begin(), itEnd = m_denominator.end(); it != itEnd; ++it) {
        double value = *it;
        if(value != 0.0) {
            wxString signal;
            if(index == static_cast<int>(m_denominator.size()) - 1) {
                if(value >= 0.0)
                    signal += "";
                else
                    signal += "-";
            } else {
                if(value >= 0.0)
                    signal += "+ ";
                else
                    signal += "- ";
            }

            if(index == 0) {
                denominator += signal + StringFromDouble(std::abs(value), 0);
                break;
            } else if(index == 1) {
                if(value == 1.0) {
                    denominator += signal + "s";
                } else {
                    denominator += signal + StringFromDouble(std::abs(value), 0) + "s";
                }
            } else {
                if(value == 1.0) {
                    denominator += signal + "s" + GetSuperscriptNumber(index);
                } else {
                    denominator += signal + StringFromDouble(std::abs(value), 0) + "s" + GetSuperscriptNumber(index);
                }
            }
            denominator += " ";
        }
        --index;
    }
}

void TransferFunction::UpdateTFText()
{
    wxString num, den;
    GetTFString(num, den);
    SetText(num, den);
    if(m_nodeList.size() == 2) {
        if(m_angle == 0.0) {
            m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(-m_width / 2, 0));
            m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(m_width / 2, 0));
        } else if(m_angle == 90.0) {
            m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(0, -m_height / 2));
            m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(0, m_height / 2));
        } else if(m_angle == 180.0) {
            m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(m_width / 2, 0));
            m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(-m_width / 2, 0));
        } else if(m_angle == 270.0) {
            m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(0, m_height / 2));
            m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(0, -m_height / 2));
        }
    }
}

bool TransferFunction::ShowForm(wxWindow* parent, Element* element)
{
    TransferFunctionForm* tfForm = new TransferFunctionForm(parent, this);
    if(tfForm->ShowModal() == wxID_OK) {
        tfForm->Destroy();
        return true;
    }
    tfForm->Destroy();
    return false;
}

void TransferFunction::Rotate(bool clockwise)
{
    if(clockwise)
        m_angle += 90.0;
    else
        m_angle -= 90.0;
    if(m_angle >= 360.0)
        m_angle = 0.0;
    else if(m_angle < 0)
        m_angle = 270.0;

    if(m_angle == 0.0) {
        m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(-m_width / 2, 0));
        m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(m_width / 2, 0));
    } else if(m_angle == 90.0) {
        m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(0, -m_height / 2));
        m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(0, m_height / 2));
    } else if(m_angle == 180.0) {
        m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(m_width / 2, 0));
        m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(-m_width / 2, 0));
    } else if(m_angle == 270.0) {
        m_nodeList[0]->SetPosition(m_position + wxPoint2DDouble(0, m_height / 2));
        m_nodeList[1]->SetPosition(m_position + wxPoint2DDouble(0, -m_height / 2));
    }

    for(auto it = m_nodeList.begin(), itEnd = m_nodeList.end(); it != itEnd; ++it) {
        Node* node = *it;
        node->Rotate(clockwise);
    }
}

void TransferFunction::CalculateSpaceState(int maxIteration, double error)
{
    m_maxIteration = maxIteration;
    m_error = error;

    int order = static_cast<int>(m_denominator.size());
    std::vector<double> denominator = m_denominator;
    std::vector<double> numerator;

    int k = order;
    for(int i = 0; i < order; i++) {
        int numIndex = i - (order - static_cast<int>(m_numerator.size()));
        if(numIndex < 0)
            numerator.push_back(0.0);
        else
            numerator.push_back(m_numerator[numIndex]);
        k--;
    }

    SpaceState ss;
    for(int i = 0; i < (order - 1); i++) {
        std::vector<double> lineA;
        for(int j = 0; j < (order - 1); j++) {
            if(j == i + 1)
                lineA.push_back(1.0);
            else
                lineA.push_back(0.0);
        }
        ss.A.push_back(lineA);
        ss.B.push_back(0.0);
        ss.C.push_back(0.0);
    }
    for(int i = 0; i < order - 1; i++) {
        ss.A[order - 2][i] = -(denominator[order - 1 - i] / denominator[0]);
        ss.C[i] = (numerator[order - 1 - i] - denominator[order - 1 - i] * numerator[0]) / denominator[0];
    }
    ss.B[order - 2] = 1.0;
    ss.D = numerator[0];

    m_ss = ss;

    // Reset state
    m_x.clear();
    m_dx.clear();

    for(unsigned int i = 0; i < m_denominator.size(); ++i) {
        m_x.push_back(0.0);
        m_dx.push_back(0.0);
    }
}

bool TransferFunction::Solve(double input, double timeStep)
{
    int order = static_cast<int>(m_ss.A.size());

    std::vector<double> x;
    std::vector<double> oldx;
    std::vector<double> dx;
    std::vector<double> olddx;
    for(int i = 0; i < order; i++) {
        x.push_back(m_x[i]);
        oldx.push_back(m_x[i]);

        dx.push_back(m_dx[i]);
        olddx.push_back(m_dx[i]);
    }

    bool exit = false;
    int iter = 0;
    while(!exit) {
        double xError = 0.0;
        double dxError = 0.0;
        for(int i = 0; i < order; i++) {
            // Trapezoidal method
            x[i] = m_x[i] + 0.5 * timeStep * (m_dx[i] + dx[i]);

            if(std::abs(x[i] - oldx[i]) > xError) xError = std::abs(x[i] - oldx[i]);

            oldx[i] = x[i];
        }
        for(int i = 0; i < order; i++) {
            // x' = Ax + Bu
            dx[i] = 0.0;
            for(int j = 0; j < order; j++) dx[i] += m_ss.A[i][j] * x[j];
            dx[i] += m_ss.B[i] * input;

            if(std::abs(dx[i] - olddx[i]) > dxError) dxError = std::abs(dx[i] - olddx[i]);

            olddx[i] = dx[i];
        }
        if(std::max(xError, dxError) < m_error) exit = true;

        iter++;
        if(iter >= m_maxIteration) return false;
    }

    m_output = 0.0;
    for(int i = 0; i < order; i++) {
        m_output += m_ss.C[i] * x[i];
        m_x[i] = x[i];
        m_dx[i] = dx[i];
    }

    m_output += m_ss.D * input;

    return true;
}

Element* TransferFunction::GetCopy()
{
    TransferFunction* copy = new TransferFunction(m_elementID);
    *copy = *this;
    m_glStringNum = NULL;
    m_glStringDen = NULL;
    UpdateTFText();
    return copy;
}
