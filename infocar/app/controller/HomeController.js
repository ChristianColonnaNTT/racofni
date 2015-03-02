/*
 * File: app/controller/HomeController.js
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

Ext.define('Infocar.controller.HomeController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeView: {
                autoCreate: true,
                selector: 'container#homeView',
                xtype: 'HomeView'
            }
        },

        control: {
            "button#ricercaUsatoHomeButton": {
                tap: 'onRicercaUsatoButtonTap'
            },
            "button#ricercaUsatoHomeButtonLabel": {
                tap: 'onRicercaUsatoButtonTap1'
            },
            "button#ricercaNuovoHomeButton": {
                tap: 'onRicercaNuovoButtonTap'
            },
            "button#ricercaNuovoHomeButtonLabel": {
                tap: 'onRicercaNuovoButtonTap1'
            },
            "button#ricercaStockHomeButton": {
                tap: 'onRicercaStockButtonTap'
            },
            "button#ricercaStockHomeButtonLabel": {
                tap: 'onRicercaStockButtonTap1'
            }
        }
    },

    onRicercaUsatoButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaUsato();
    },

    onRicercaUsatoButtonTap1: function(button, e, eOpts) {
        Infocar.app.showRicercaUsato();
    },

    onRicercaNuovoButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaNuovo();
    },

    onRicercaNuovoButtonTap1: function(button, e, eOpts) {
        Infocar.app.showRicercaNuovo();
    },

    onRicercaStockButtonTap: function(button, e, eOpts) {
        Infocar.app.showRicercaStock();
    },

    onRicercaStockButtonTap1: function(button, e, eOpts) {
        Infocar.app.showRicercaStock();
    },

    getView: function() {
        var homeView = this.getHomeView();

        return homeView;
    }

});