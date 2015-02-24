/*
 * File: app/view/EquipDettVeicoloNuovoListItem.js
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

Ext.define('Infocar.view.EquipDettVeicoloNuovoListItem', {
    extend: 'Ext.dataview.component.ListItem',
    alias: 'widget.EquipDettVeicoloNuovoListItem',

    requires: [
        'Ext.Button',
        'Ext.Label'
    ],

    config: {
        itemId: 'equipDettVeicoloNuovoListItem',
        padding: 10,
        layout: 'hbox',
        items: [
            {
                xtype: 'button',
                baseCls: 'statoLiberoEquipDettVeicoloNuovoDataItemButtonCls',
                itemId: 'statoEquipDettVeicoloNuovoDataItemButton'
            },
            {
                xtype: 'button',
                baseCls: 'infoEquipDettVeicoloNuovoDataItemButtonCls',
                itemId: 'infoEquipDettVeicoloNuovoDataItemButton'
            },
            {
                xtype: 'button',
                itemId: 'descEquipDettVeicoloNuovoDataItemButton',
                width: '75%'
            },
            {
                xtype: 'label',
                itemId: 'prezzoEquipDettVeicoloNuovoDataItemLabel',
                width: '15%'
            }
        ]
    },

    updateRecord: function(record) {
        var me = this;

        if (me && record) {
            var equipPrezzo = Infocar.app.formatCurrency(record.get('equipPrezzo'));

            me.down('#descEquipDettVeicoloNuovoDataItemButton').setText(record.get('descrizione'));
            me.down('#prezzoEquipDettVeicoloNuovoDataItemLabel').setHtml(equipPrezzo);

            var clsStato = '';
            // 0=Libero,  6=Nuova Deselezione
            if (!record.get('stato') || record.get('stato') === '0' || record.get('stato') === '6') {
                clsStato = 'statoLiberoEquipDettVeicoloNuovoDataItemButtonCls';
            // 1=Selezionato,  5=Nuova Selezione
            } else if (record.get('stato') === '1' || record.get('stato') === '5') {
                clsStato = 'statoSelezEquipDettVeicoloNuovoDataItemButtonCls';
            // 4=Incluso
            } else if (record.get('stato') === '4') {
                clsStato = 'statoInclusoEquipDettVeicoloNuovoDataItemButtonCls';
            // 2=Non Disponibile
            } else if (record.get('stato') === '2') {
                clsStato = 'statoNonDispEquipDettVeicoloNuovoDataItemButtonCls';
            }

            if (clsStato !== '') {
                //me.down('#chkboxEquipDettVeicoloNuovoDataItemImg').setSrc('/resources/img/' + imgStato);
                //me.down('#statoEquipDettVeicoloNuovoDataItemButton').setIcon('/resources/img/' + imgStato);
                me.down('#statoEquipDettVeicoloNuovoDataItemButton').setBaseCls(clsStato);
                //me.down('#statoEquipDettVeicoloNuovoDataItemButton').setStyle('{ background-image: url(/resources/img/'+ imgStato +') !important }', null);
            } else {
                me.down('#statoEquipDettVeicoloNuovoDataItemButton').setBaseCls('statoUndefinedEquipDettVeicoloNuovoDataItemButtonCls');
            }

            if (record.get('infoFlag') === 'S') {
                me.down('#infoEquipDettVeicoloNuovoDataItemButton').setVisibility(true);
            } else {
                me.down('#infoEquipDettVeicoloNuovoDataItemButton').setVisibility(false);
            }
        }

        if (me) me.callParent(arguments);

    }

});