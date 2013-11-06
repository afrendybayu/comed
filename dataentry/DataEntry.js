/*******************************
 *  Afrendy Bayu, 5 Nov 2013  *
 *    ngelu sinau calender    *
 * ganti coba data endry saja *
********************************/

Ext.define('Ext.dataentry.DataEntry', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.tab.*',
        'Ext.data.*',
        'Ext.dataentry.GridEntry',
        'Ext.dataentry.DafGal',
    ],
    
    xtype: 'layout-accordion',
    layout: 'accordion',
    width: '100%',
    height: 601,
    
    initComponent: function() {
        Ext.apply(this, {
			items: [{
				title: 'Data Running Hour',
				xtype: 'tabpanel',
				tabPosition: 'bottom',
				//activeTab: 0,
				items: [{
					title: 'Compressor',
					items: Ext.create('Ext.dataentry.GridEntry'),
				}, {
					title: 'Genset',
					//items: Ext.create('Ext.dataentry.GridEntry'),
				}, {
					title: 'Pump',
					items: Ext.create('Ext.dataentry.GridEntry'),
				}]
				//*/
			},{
				title: 'Daftar Kegagalan Alat',
				items: Ext.create('Ext.dataentry.DafGal'),
				//html: 'Page Title 1<br/>Page Title 2<br/>Page Title 3<br/>Page Title 4<br/>Page Title 5<br/>',
			}]
		});
        this.callParent();
    }
});
//*/
