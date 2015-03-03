/*
 * File: app/view/EquipDettVeicoloNuovoList.js
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

Ext.define('Infocar.view.EquipDettVeicoloNuovoList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.equipdettveicolonuovolist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        cls: 'equipDettVeicoloNuovoListCls',
        itemId: 'equipDettVeicoloNuovoList',
        disableSelection: true,
        pressedCls: 'none',
        scrollToTopOnRefresh: false,
        store: 'EquipDettVeicoloNuovoStore',
        grouped: true,
        itemHeight: 50,
        striped: true,
        itemTpl: [
            '<table class="equipDettVeicoloNuovoTableCls" width="100%">',
            '  <tr>',
            '    <td class="statoEquipDettVeicoloNuovoTdCls">',
            '<tpl if="stato==\'0\' || stato==\'6\'">',
            '<img src="resources/images/35-ipad_infocar_done_35.png" class="statoEquipDettVeicoloNuovoImgCls" codice="{codice}">',
            '<tpl elseif="stato==\'1\' || stato==\'5\'">',
            '<img src="resources/images/35-ipad_infocar_done_44.png" class="statoEquipDettVeicoloNuovoImgCls" codice="{codice}">',
            '<tpl elseif="stato==\'4\'">',
            '<img src="resources/images/35-ipad_infocar_done_42.png" class="statoEquipDettVeicoloNuovoImgCls" codice="{codice}">',
            '<tpl elseif="stato==\'2\'">',
            '<img src="resources/images/35-ipad_infocar_done_38.png" class="statoEquipDettVeicoloNuovoImgCls" codice="{codice}">',
            '</tpl>',
            '    </td>',
            '    <td class="infoEquipDettVeicoloNuovoTdCls">',
            '      <tpl if="infoFlag == \'S\'">',
            '        <img src="resources/images/info_new.png" class="infoEquipDettVeicoloNuovoImgCls" codice="{codice}">',
            '      </tpl>',
            '    </td>',
            '    <td class="descEquipDettVeicoloNuovoTdCls"><span class="descEquipDettVeicoloNuovoSpanCls" codice="{codice}">{descrizione}</span></td>',
            '    <td class="prezzoEquipDettVeicoloNuovoTdCls">{equipPrezzo}</td>',
            '  </tr>',
            '</table>'
        ]
    }

});