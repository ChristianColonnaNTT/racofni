/*
 * File: app/model/DettaglioVeicoloUsatoModel.js
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

Ext.define('Infocar.model.DettaglioVeicoloUsatoModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        idProperty: 'codice',
        fields: [
            {
                name: 'codice',
                type: 'string'
            },
            {
                name: 'marca_codice',
                type: 'string'
            },
            {
                name: 'marca_descrizione',
                type: 'string'
            },
            {
                name: 'modello_codice',
                type: 'string'
            },
            {
                name: 'modello_descrizione',
                type: 'string'
            },
            {
                name: 'allestimento_codice',
                type: 'string'
            },
            {
                name: 'allestimento_descrizione',
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
                name: 'veicoloPrezzo',
                type: 'string'
            },
            {
                name: 'urlImg',
                type: 'string'
            },
            {
                dateFormat: 'd/m/Y',
                name: 'dataImmatricolazione',
                type: 'date'
            },
            {
                name: 'immatricolazionePrezzo',
                type: 'string'
            },
            {
                name: 'kmPercorsi',
                type: 'string'
            },
            {
                name: 'kmTeorici',
                type: 'string'
            },
            {
                name: 'kmPercorsiPrezzo',
                type: 'string'
            },
            {
                name: 'equipaggiamentiPrezzo',
                type: 'string'
            },
            {
                name: 'ripristino',
                type: 'string'
            },
            {
                name: 'ripristinoPrezzo',
                type: 'string'
            },
            {
                name: 'immatricAutocarroFlag',
                type: 'string'
            },
            {
                name: 'immatricAutocarroPrezzo',
                type: 'string'
            },
            {
                name: 'speseGestioneFlag',
                type: 'string'
            },
            {
                name: 'speseGestionePrezzo',
                type: 'string'
            },
            {
                name: 'targa',
                type: 'string'
            },
            {
                name: 'telaio',
                type: 'string'
            },
            {
                name: 'coloreEsterno_codice',
                type: 'string'
            },
            {
                name: 'coloreEsterno_descrizione',
                type: 'string'
            },
            {
                name: 'coloreInterno_codice',
                type: 'string'
            },
            {
                name: 'coloreInterno_descrizione',
                type: 'string'
            },
            {
                dateFormat: 'd/m/Y',
                name: 'dataBollo',
                type: 'date'
            },
            {
                dateFormat: 'd/m/Y',
                name: 'dataRevisione',
                type: 'date'
            },
            {
                name: 'provenienza_codice',
                type: 'string'
            },
            {
                name: 'destinazione_codice',
                type: 'string'
            },
            {
                name: 'librettoFlag',
                type: 'string'
            },
            {
                name: 'tagliandiFlag',
                type: 'string'
            },
            {
                name: 'fatturabileFlag',
                type: 'string'
            },
            {
                name: 'certificatoFlag',
                type: 'string'
            },
            {
                name: 'ipotecataFlag',
                type: 'string'
            },
            {
                name: 'leasingFlag',
                type: 'string'
            },
            {
                name: 'note',
                type: 'string'
            },
            {
                name: 'valutazioneQRPrezzo',
                type: 'string'
            },
            {
                name: 'varConcessionarioPrezzo',
                type: 'string'
            },
            {
                name: 'varConcordataPrezzo',
                type: 'string'
            },
            {
                name: 'totaleConcordatoPrezzo',
                type: 'string'
            },
            {
                name: 'ricercaTargaFlag',
                type: 'string'
            },
            {
                name: 'salvataggioFlag',
                type: 'string'
            }
        ],
        proxy: {
            type: 'rest',
            url: '/usato/dettaglioVeicolo',
            appendId: false,
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json',
                allowSingle: false
            }
        }
    }
});