/*
 * File: app/store/EquipMontatiInfoVeicoloStockStore.js
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

Ext.define('Infocar.store.EquipMontatiInfoVeicoloStockStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Infocar.model.StringModel',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'Infocar.model.StringModel',
        storeId: 'EquipMontatiInfoVeicoloStockStore',
        proxy: {
            type: 'rest',
            url: '/stock/equipMontatiInfoVeicolo',
            appendId: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});