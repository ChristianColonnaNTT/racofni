/*
 * File: app/model/GraficoInfoVeicoloModel.js
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

Ext.define('Infocar.model.GraficoInfoVeicoloModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'valoreX',
                type: 'string'
            },
            {
                name: 'valoreY1',
                type: 'int'
            },
            {
                name: 'valoreY2',
                type: 'int'
            }
        ]
    }
});