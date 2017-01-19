//////////////////////////////////////////////////////////////////////
// This file was auto-generated by codelite's wxCrafter Plugin
// wxCrafter project file: ControlEditor.wxcp
// Do not modify this file by hand!
//////////////////////////////////////////////////////////////////////

#include "ControlEditorBase.h"


// Declare the bitmap loading function
extern void wxC870InitBitmapResources();

static bool bBitmapLoaded = false;


ControlEditorBase::ControlEditorBase(wxWindow* parent, wxWindowID id, const wxString& title, const wxPoint& pos, const wxSize& size, long style)
    : wxFrame(parent, id, title, pos, size, style)
{
    if ( !bBitmapLoaded ) {
        // We need to initialise the default bitmap handler
        wxXmlResource::Get()->AddHandler(new wxBitmapXmlHandler);
        wxC870InitBitmapResources();
        bBitmapLoaded = true;
    }
    
    m_toolbarMain = this->CreateToolBar(wxTB_TEXT|wxTB_FLAT, wxID_ANY);
    m_toolbarMain->SetToolBitmapSize(wxSize(32,32));
    
    m_toolbarMain->AddTool(wxID_ANY, _("New"), wxXmlResource::Get()->LoadBitmap(wxT("new32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Import"), wxXmlResource::Get()->LoadBitmap(wxT("imp32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Export"), wxXmlResource::Get()->LoadBitmap(wxT("exp32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddSeparator();
    
    m_toolbarMain->AddTool(wxID_ANY, _("Copy"), wxXmlResource::Get()->LoadBitmap(wxT("copy32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Paste"), wxXmlResource::Get()->LoadBitmap(wxT("paste32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Undo"), wxXmlResource::Get()->LoadBitmap(wxT("undo32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Redo"), wxXmlResource::Get()->LoadBitmap(wxT("redo32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddSeparator();
    
    m_toolbarMain->AddTool(wxID_ANY, _("Drag"), wxXmlResource::Get()->LoadBitmap(wxT("drag32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Move"), wxXmlResource::Get()->LoadBitmap(wxT("move32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    
    m_toolbarMain->AddTool(wxID_ANY, _("Delete"), wxXmlResource::Get()->LoadBitmap(wxT("delete32")), wxNullBitmap, wxITEM_NORMAL, wxT(""), wxT(""), NULL);
    m_toolbarMain->Realize();
    
    m_auimgr = new wxAuiManager;
    m_auimgr->SetManagedWindow( this );
    m_auimgr->SetFlags( wxAUI_MGR_LIVE_RESIZE|wxAUI_MGR_TRANSPARENT_HINT|wxAUI_MGR_TRANSPARENT_DRAG|wxAUI_MGR_ALLOW_ACTIVE_PANE|wxAUI_MGR_ALLOW_FLOATING);
    m_auimgr->GetArtProvider()->SetMetric(wxAUI_DOCKART_GRADIENT_TYPE, wxAUI_GRADIENT_NONE);
    
    m_panelControlElements = new wxPanel(this, wxID_ANY, wxDefaultPosition, wxDLG_UNIT(this, wxSize(-1,-1)), wxTAB_TRAVERSAL);
    m_panelControlElements->SetBackgroundColour(wxColour(wxT("rgb(255,255,255)")));
    
    m_auimgr->AddPane(m_panelControlElements, wxAuiPaneInfo().Caption(_("Control elements")).Direction(wxAUI_DOCK_LEFT).Layer(0).Row(0).Position(0).BestSize(200,200).MinSize(200,200).MaxSize(200,200).CaptionVisible(true).MaximizeButton(false).CloseButton(false).MinimizeButton(false).PinButton(false));
    
    m_panelWorkspace = new wxPanel(this, wxID_ANY, wxDefaultPosition, wxDLG_UNIT(this, wxSize(-1,-1)), wxTAB_TRAVERSAL);
    
    m_auimgr->AddPane(m_panelWorkspace, wxAuiPaneInfo().Direction(wxAUI_DOCK_CENTER).Layer(0).Row(0).Position(0).BestSize(100,100).MinSize(100,100).MaxSize(100,100).Fixed().CaptionVisible(false).MaximizeButton(false).CloseButton(false).MinimizeButton(false).PinButton(false));
    m_auimgr->Update();
    
    wxBoxSizer* boxSizerLvl2_1 = new wxBoxSizer(wxVERTICAL);
    m_panelWorkspace->SetSizer(boxSizerLvl2_1);
    
    int *m_glCanvasAttr = NULL;
    m_glCanvas = new wxGLCanvas(m_panelWorkspace, wxID_ANY, m_glCanvasAttr, wxDefaultPosition, wxDLG_UNIT(m_panelWorkspace, wxSize(-1,-1)), 0);
    wxDELETEA( m_glCanvasAttr );
    
    boxSizerLvl2_1->Add(m_glCanvas, 1, wxEXPAND, WXC_FROM_DIP(5));
    
    m_statusBarMain = new wxStatusBar(this, wxID_ANY, wxSTB_DEFAULT_STYLE);
    m_statusBarMain->SetFieldsCount(1);
    this->SetStatusBar(m_statusBarMain);
    
    SetName(wxT("ControlEditorBase"));
    SetSize(800,600);
    if (GetSizer()) {
         GetSizer()->Fit(this);
    }
    if(GetParent()) {
        CentreOnParent(wxBOTH);
    } else {
        CentreOnScreen(wxBOTH);
    }
#if wxVERSION_NUMBER >= 2900
    if(!wxPersistenceManager::Get().Find(this)) {
        wxPersistenceManager::Get().RegisterAndRestore(this);
    } else {
        wxPersistenceManager::Get().Restore(this);
    }
#endif
}

ControlEditorBase::~ControlEditorBase()
{
    m_auimgr->UnInit();
    delete m_auimgr;

}
