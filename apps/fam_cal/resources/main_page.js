// ==========================================================================
// Project:   FamCal - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals FamCal */

// This page describes the main user interface for your application.
FamCal.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    themeName: 'fam-cal',
    childViews: [SC.View.extend({
      layout: { width: 1024, centerX: 0 },
      modeAdjust: { 
        m_p: { layout: { width: 768 }}
      },
      childViews: 'topbar agendaArea mainSection'.w(),

      topbar: SC.ContainerView.extend({
        backgroundColor: 'green',
        layout: { height: 24 },
        contentView: SC.View.extend(SC.FlowedLayout,{
          classNames: 'top-bar'.w(),
          transitionIn: SC.View.FADE_IN,
          defaultFlowSpacing: { left: 5, right: 5 },
          childViews: 'home login logout help'.w(),

          home: SC.ButtonView.extend(SC.AutoResize, {
            layout: { width: 24 },
            title: "Home",
          }),

          login: SC.ButtonView.extend(SC.AutoResize, {
            layout: { width: 24 },
            title: "Log In".loc()
          }),

          logout: SC.ButtonView.extend(SC.AutoResize, {
            layout: { width: 24 },
            title: "Log Out".loc()
          }),

          help: SC.ButtonView.extend(SC.AutoResize, {
            layout: { width: 24 },
            title: "Help".loc()
          }),
        }),
      }),

      agendaArea: SC.View.design({
        backgroundColor: 'green',
        layout: { top: 25, height: 700, width: 300},
      }),

      mainSection: SC.View.design({
        backgroundColor: 'green',
        layout: { top: 25, height: 700, width: 800, left: 325},
      }),

    })]
  })

});
