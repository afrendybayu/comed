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
        //var content = '<div class="portlet-content">'+Ext.example.shortBogusMarkup+'</div>';

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
                html: 'Online based Asset Monitoring & Analysis'
            },{
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'app-options',
                    title: 'Hirarki',
                    region: 'west',
                    animCollapse: true,
                    width: 210,
                    //minWidth: 210,
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
                        items: Ext.create('Ext.appHir.Hirarki')
                    },{
                        //width: 220,
                        xtype: 'datepicker',
						minDate: new Date(),
						handler: function(picker, date) {
							// do something with the selected date
						}
						/*
						listeners: {
                            'select': {
                                fn: function(dp, dt){
                                    Ext.getCmp('app-calendar').setStartDate(dt);
                                },
                                scope: this
                            }
                        }
                        //*/
                    }]
                }, {
					region: 'center',
					xtype: 'tabpanel', // TabPanel itself has no title
					activeTab: 0,      // First tab active by default
					plain: true,
					items: [{
						title: 'Data Entry',
						//closable: 'true',
						items: Ext.create('Ext.dataentry.DataEntry')
					},{
						title: 'Agenda & Aktivitas',
						//items: Ext.create('Ext.calendar.App'),
						//disabled: 'true',
					},{
						title: 'Prestasi Mesin',
						//items: Ext.create('Ext.calendar.App'),
						//disabled: 'true',
					},{
						title: 'Laporan',
						items: Ext.create('Ext.appHir.Hirarki'),						
					},{
						title: 'Konfigurasi',
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
        var el = Ext.get('app-msg-hir'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg-hir').hide();
        }
    }
});
