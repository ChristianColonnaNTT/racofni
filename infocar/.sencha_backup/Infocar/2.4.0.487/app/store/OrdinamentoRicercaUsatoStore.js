/*
 * File: app/store/OrdinamentoRicercaUsatoStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Infocar.store.OrdinamentoRicercaUsatoStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Infocar.model.OrdinamentoModel',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'Infocar.model.OrdinamentoModel',
        storeId: 'OrdinamentoRicercaUsatoStore',
        proxy: {
            type: 'rest',
            url: '/usato/ordinamentoRicerca',
            appendId: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});