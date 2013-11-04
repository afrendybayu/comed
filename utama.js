/**
 * @class Ext.app.Portal
 * @extends Object
 * A sample portal layout application class.
 */

Ext.define('Ext.app.Portal', {

    extend: 'Ext.container.Viewport',
    

    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, header, tool){
                var portlet = header.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    },

    initComponent: function(){
        var content = '<div class="portlet-content">'+Ext.example.shortBogusMarkup+'</div>';

        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
                padding: '0 5 5 5' // pad the layout from the window edges
            },
            items: [{
                id: 'app-header',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: 'Ext Portal Merdeka'
            },{
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'app-options',
                    title: 'Hirarki',
                    region: 'west',
                    animCollapse: true,
                    width: 220,
                    minWidth: 220,
                    maxWidth: 800,
                    split: true,
                    collapsible: true,
                    layout:{
                        type: 'vbox',
                        animate: true
                    },
                    items: [{
                        //html: content,
                        //title:'Navigation',
                        autoScroll: true,
                        border: false,
                        //iconCls: 'nav'
                        items: Ext.create('Ext.app.Hirarki'),
                    },{
                        width: 220,
                        xtype: 'datepicker',
						minDate: new Date(),
						handler: function(picker, date) {
							// do something with the selected date
						}
                    }]
                }, {
					region: 'center',
					xtype: 'tabpanel', // TabPanel itself has no title
					activeTab: 0,      // First tab active by default
					items: [{
						title: 'Data Entry',
						closable: 'true',
						html: 'The first tab\'s content. Others may be added dynamically'
					},{
						title: 'Edit Hirarki',
						disable: 'true',
						html: 'The first tab\'s content. Others may be added dynamically'
					},{
						title: 'Kalender',
						html: 'The first tab\'s content. Others may be added dynamically'
					},{
						title: 'Laporan',
						html: 'The first tab\'s content. Others may be added dynamically'
					}]
				}]
                /*
                },{
                    id: 'app-portal',
                    xtype: 'portalpanel',
                    region: 'center',
                    items: [{
                        id: 'col-1',
                        items: [{
                            id: 'portlet-1',
                            title: 'Grid Portlet',
                            tools: this.getTools(),
                            items: Ext.create('Ext.app.GridPortlet'),
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        },{
                            id: 'portlet-2',
                            title: 'Portlet 2',
                            tools: this.getTools(),
                            html: content,
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        }]
                    },{
                        id: 'col-2',
                        items: [{
                            id: 'portlet-3',
                            title: 'Portlet 3',
                            tools: this.getTools(),
                            html: '<div class="portlet-content">'+Ext.example.bogusMarkup+'</div>',
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        }]
                    },{
                        id: 'col-3',
                        items: [{
                            id: 'portlet-4',
                            title: 'Stock Portlet',
                            tools: this.getTools(),
                            items: Ext.create('Ext.app.ChartPortlet'),
                            listeners: {
                                'close': Ext.bind(this.onPortletClose, this)
                            }
                        }]
                    }]
                }]*/
            }]
        });
        this.callParent(arguments);
    },

    onPortletClose: function(portlet) {
        this.showMsg('"' + portlet.title + '" was removed');
    },

    showMsg: function(msg) {
        var el = Ext.get('app-msg'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg').hide();
        }
    }
});
