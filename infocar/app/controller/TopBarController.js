/*
 * File: app/controller/TopBarController.js
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

Ext.define('Infocar.controller.TopBarController', {
    extend: 'Ext.app.Controller',

    config: {
    },

    setTitoloFromContainer: function(container, item) {
        if (item && item.Titolo) {

            // DEBUG
            //console.log('TopBar titolo: titolo['+ item.Titolo +']');

            //var titoloSezioneLabel = Ext.ComponentQuery.query('#titoloSezioneTopBarLabel')[0];
            var titoloSezioneLabel = container.up('container').down('#titoloSezioneTopBarLabel');
            titoloSezioneLabel.setHtml(item.Titolo);
        }
    },

    topBarViewInitialize: function() {
        var utenteData = Infocar.app.utenteModel;

        // DEBUG
        //console.log('TopBar init: nomeUtente['+ utenteData.get('nomeUtente') +'] cognomeUtente['+ utenteData.get('cognomeUtente') +']');

        // Visualizzo il nome e cognome dell'utente nella top bar
        //var nomeUtenteLabel = Ext.ComponentQuery.query('#userNameTopBarLabel')[0];
        /*
        var nomeUtenteLabel = component.down('#userNameTopBarLabel');
        nomeUtenteLabel.setData(utenteData.getData());
        */
        var aryNomeUtenteLabel = Ext.ComponentQuery.query('#userNameTopBarLabel');

        for(var i=0, len=aryNomeUtenteLabel.length; i<len; i++) {
            var nomeUtenteLabel = aryNomeUtenteLabel[i];

            nomeUtenteLabel.setData(utenteData.getData());
        }
    }

});