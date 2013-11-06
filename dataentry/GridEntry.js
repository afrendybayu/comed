/*******************************
 *	Afrendy Bayu, 5 Nov 2013  *
 *	  ngelu sinau calender    *
 * 
********************************/

Ext.define('Ext.dataentry.GridEntry', {
    extend: 'Ext.grid.Panel',
    
    requires: [
        'Ext.grid.*',
        'Ext.data.*',
        //'Ext.grid.feature.Grouping'
    ],
    
    //xtype: 'grouped-grid',
    //collapsible: true,
    columnLines: true,
    height: 570,
    //viewConfig: {
    //    stripeRows: true
    //},
    
    initComponent: function () {
		Ext.apply(this, {
			store: new Ext.data.Store({
				fields:['no','Fasility','eq','1027','1028','1029','1030','1031','1101','1102','1103','1104'],
				groupField: 'Fasility',
                proxy: {
					type: 'ajax',
					url: 'dataentry/equip.json',
					reader: {
						type: 'json',
						root: 'user',
					}
				},
                //folderSort: true,
                autoLoad: true,
                sorters: [{
                    property: 'name',
                    direction: 'ASC'
                }]
            }),
			columns: 
			    [	{ text: 'No',  dataIndex: 'no',width:36 },
					{ header: 'Equipment',  dataIndex: 'eq', width:150 },
					{ header: 'Oktober 2013', 
						columns: 
							[	{ text: '27', dataIndex: '1027', flex:1 },
								{ text: '28', dataIndex: '1028', flex:1 },
								{ text: '29', dataIndex: '1029', flex:1 },
								{ text: '30', dataIndex: '1030', flex:1 },
								{ text: '31', dataIndex: '1031', flex:1 }]},
					{ header: 'November 2013', 
						columns: 
							[	{ header: '1', dataIndex: '1101', flex:1 },
								{ header: '2', dataIndex: '1102', flex:1 },
								{ header: '3', dataIndex: '1103', flex:1 },
								{ header: '4', dataIndex: '1104', flex:1 },
								{ header: '5', dataIndex: '1105', flex:1 }]},
					{ text: 'Catatan', dataIndex: 'cat', width:200 }],
			features: [{
					ftype:'grouping',
					//hideGroupedHeader: true,
					startCollapsed: false,
				}],
			//resizable: true,
			forceFit: true,
		});
		this.callParent();
    }
});
