/*
 * File: app/view/HomeView.js
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

Ext.define('Infocar.view.HomeView', {
    extend: 'Ext.Container',
    alias: 'widget.HomeView',

    requires: [
        'Ext.Label',
        'Ext.XTemplate',
        'Ext.Img',
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        baseCls: 'homeViewCls',
        itemId: 'homeView',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype: 'label',
                itemId: 'welcomeHomeLabel',
                tpl: [
                    '<div class="homePageWelcome">Benvenuto </div>  <div class="homePageName"> {nomeUtente} {cognomeUtente} </div>'
                ]
            },
            {
                xtype: 'label',
                hidden: true,
                itemId: 'messageHomeLabel'
            },
            {
                xtype: 'image',
                cls: 'welcomeHomeImgCls',
                src: 'resources/images/logo_hp.png'
            },
            {
                xtype: 'container',
                cls: 'moduliButtonsHomeContainerCls',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        itemId: 'usatoHomeButtonsContainer',
                        items: [
                            {
                                xtype: 'button',
                                baseCls: 'RicercaUsatoHomeButtonCls',
                                itemId: 'ricercaUsatoHomeButton',
                                iconCls: 'action'
                            },
                            {
                                xtype: 'button',
                                baseCls: 'ricercaUsatoHomeButtonLabelCls',
                                cls: 'whiteHomeLabel',
                                id: 'ricercaUsatoHomeButtonLabel',
                                labelCls: 'x-button-label whiteHomeLabel',
                                text: ''
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'nuovoHomeButtonsContainer',
                        items: [
                            {
                                xtype: 'button',
                                baseCls: 'RicercaNuovoHomeButtonCls',
                                itemId: 'ricercaNuovoHomeButton',
                                iconCls: 'action'
                            },
                            {
                                xtype: 'button',
                                baseCls: 'nuovoHomeLabelCls',
                                cls: 'whiteHomeLabel',
                                id: 'ricercaNuovoHomeButtonLabel',
                                labelCls: 'x-button-label whiteHomeLabel',
                                text: 'MyButton34'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'stockHomeButtonsContainer',
                        items: [
                            {
                                xtype: 'button',
                                baseCls: 'RicercaStockHomeButtonCls',
                                itemId: 'ricercaStockHomeButton',
                                iconCls: 'action'
                            },
                            {
                                xtype: 'button',
                                baseCls: 'ricercaStockHomeButtonLabel',
                                cls: 'whiteHomeLabel',
                                id: 'ricercaStockHomeButtonLabel',
                                labelCls: 'x-button-label whiteHomeLabel',
                                text: 'MyButton35'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});