/*
 * File: app/model/InfoVeicoloStockModel.js
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

Ext.define('Infocar.model.InfoVeicoloStockModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    config: {
        fields: [
            {
                name: 'veicoloStock_codice',
                type: 'string'
            },
            {
                name: 'veicoloStock_descrizione',
                type: 'string'
            },
            {
                name: 'alimentazione_codice',
                type: 'string'
            },
            {
                name: 'alimentazione_descrizione',
                type: 'string'
            },
            {
                name: 'carrozzeria_codice',
                type: 'string'
            },
            {
                name: 'carrozzeria_descrizione',
                type: 'string'
            },
            {
                name: 'infoMiniUrlImg',
                type: 'string'
            },
            {
                name: 'infoUrlImg1',
                type: 'string'
            },
            {
                name: 'infoUrlImg2',
                type: 'string'
            },
            {
                name: 'infoUrlImg3',
                type: 'string'
            },
            {
                name: 'venditaPrezzo',
                type: 'string'
            },
            {
                name: 'alternativoPrezzo',
                type: 'string'
            },
            {
                name: 'minimoPrezzo',
                type: 'string'
            },
            {
                name: 'codiceInfocar',
                type: 'string'
            },
            {
                name: 'codiceCasa',
                type: 'string'
            },
            {
                name: 'codiceQUD',
                type: 'string'
            },
            {
                name: 'omologazioni',
                type: 'string'
            },
            {
                name: 'statoUsoSchedaVeicolo',
                type: 'string'
            },
            {
                name: 'infoAggiuntiveSchedaVeicolo',
                type: 'string'
            },
            {
                name: 'cilindrata',
                type: 'string'
            },
            {
                name: 'potenza',
                type: 'string'
            },
            {
                name: 'normativa',
                type: 'string'
            },
            {
                name: 'allestimentoFisicoStock',
                type: 'int'
            },
            {
                name: 'allestimentoVirtualeStock',
                type: 'int'
            },
            {
                name: 'allestimentoGiacenzaStock',
                type: 'int'
            },
            {
                name: 'allestimentoGiacMediaStock',
                type: 'int'
            },
            {
                name: 'allestimentoGiacenzaStockUrlImg',
                type: 'string'
            },
            {
                name: 'modelloFisicoStock',
                type: 'int'
            },
            {
                name: 'modelloVirtualeStock',
                type: 'int'
            },
            {
                name: 'modelloGiacenzaStock',
                type: 'int'
            },
            {
                name: 'modelloGiacMediaStock',
                type: 'int'
            },
            {
                name: 'modelloGiacenzaStockUrlImg',
                type: 'string'
            },
            {
                name: 'venditaValoreMesi3',
                type: 'string'
            },
            {
                name: 'venditaValoreMesi6',
                type: 'string'
            },
            {
                name: 'ritiroValoreMesi3',
                type: 'string'
            },
            {
                name: 'ritiroValoreMesi6',
                type: 'string'
            }
        ],
        proxy: {
            type: 'rest',
            url: '/stock/infoVeicolo',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});