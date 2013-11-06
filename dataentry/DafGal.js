/*******************************
 *	Afrendy Bayu, 5 Nov 2013  *
 *	  ngelu sinau calender    *
 * 
********************************/

Ext.define('Ext.dataentry.DafGal', {
    extend: 'Ext.grid.Panel',
    
    requires: [
        'Ext.grid.*',
        'Ext.data.*',
        //'Ext.grid.feature.Grouping'
    ],
    
    //xtype: 'grouped-grid',
    //collapsible: true,
    columnLines: true,
    //height: 470,
    //viewConfig: {
    //    stripeRows: true
    //},
    
    initComponent: function () {
		Ext.apply(this, {
			store: new Ext.data.Store({
				fields:['no','eq','downt','downtj','startt','startj','cat'],
				groupField: 'Fasilitas',
                proxy: {
					type: 'ajax',
					url: 'dataentry/gagal.json',
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
			    [	{ header: 'No', dataIndex: 'no',width:36 },
					{ header:'Unit', dataIndex: 'eq', width:150 },
					{ header:'Unit Down',
						columns: 
							[	{ text: 'Tanggal', dataIndex: 'downt', flex:1 },
								{ text: 'Jam', dataIndex: 'downj', flex:1 }]},
					{ header: 'Repair Start', 
						columns: 
							[	{ text: 'Tanggal', dataIndex: 'startt', flex:1 },
								{ text: 'Jam', dataIndex: 'startj', flex:1 }]},
					{ header:'Repair End',
						columns: 
							[	{ text: 'Tanggal', dataIndex: 'endt', flex:1 },
								{ text: 'Jam', dataIndex: 'endj', flex:1 }]},
					{ header: 'Unit Running', 
						columns: 
							[	{ text: 'Tanggal', dataIndex: 'upt', flex:1 },
								{ text: 'Jam', dataIndex: 'upj', flex:1 }]},
					{ header: 'Catatan', dataIndex: 'cat', width:200 }],
			//resizable: true,
			forceFit: true,
		});
		this.callParent();
    }
});
