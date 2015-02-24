/*
 * File: app/controller/MenuController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Infocar.controller.MenuController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#showMainMenuLeftButton": {
                tap: 'onShowMainMenuLeftButtonTap'
            },
            "button#hideMainMenuLeftButton": {
                tap: 'onHideMainMenuLeftButtonTap'
            },
            "button#homeMenuLeftButton": {
                tap: 'onHomeMenuLeftButtonTap'
            },
            "button#ricercaUsatoMenuLeftButton": {
                tap: 'onRicercaUsatoMenuLeftButtonTap'
            },
            "button#ricercaNuovoMenuLeftButton": {
                tap: 'onRicercaNuovoMenuLeftButtonTap'
            },
            "button#ricercaStockMenuLeftButton": {
                tap: 'onRicercaStockMenuLeftButtonTap'
            }
        }
    },

    onShowMainMenuLeftButtonTap: function(button, e, eOpts) {
        Ext.Viewport.showMenu('left');
    },

    onHideMainMenuLeftButtonTap: function(button, e, eOpts) {
        Ext.Viewport.hideMenu('left');
    },

    onHomeMenuLeftButtonTap: function(button, e, eOpts) {
        Infocar.app.showHome();
    },

    onRicercaUsatoMenuLeftButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaUsato();
    },

    onRicercaNuovoMenuLeftButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaNuovo();
    },

    onRicercaStockMenuLeftButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaStock();
    },

    launch: function() {
        // Creo il menu principale che quando aperto
        // viene visualizzato in overlay sul lato sinistro.

        var mainMenuLeft = Ext.create('Infocar.view.MainMenuLeft');

        Ext.Viewport.setMenu(
            mainMenuLeft,
            {
                side: 'left'
            }
        );

    }

});