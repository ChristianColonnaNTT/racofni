/*
 * File: app/store/DatiTecniciInfoVeicoloUsatoStore.js
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

Ext.define('Infocar.store.DatiTecniciInfoVeicoloUsatoStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Infocar.model.DatiTecniciModel',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Grouper'
    ],

    config: {
        model: 'Infocar.model.DatiTecniciModel',
        storeId: 'DatiTecniciInfoVeicoloUsatoStore',
        proxy: {
            type: 'rest',
            url: '/usato/datiTecniciInfoVeicolo',
            appendId: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        sorters: {
            transform: function(item) {
                return parseInt(item, 10);
            },
            property: 'codice'
        },
        grouper: {
            groupFn: function(item) {
                return item.get('gruppoDesc');
            },
            transform: function(item) {
                return parseInt(item, 10);
            },
            sortProperty: 'codice'
        }
    }
});