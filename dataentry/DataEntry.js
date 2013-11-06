/*******************************
 *	Afrendy Bayu, 5 Nov 2013  *
 *	  ngelu sinau calender    *
 * ganti coba data endry saja *
********************************/

Ext.define('Ext.dataentry.DataEntry', {
    extend: 'Ext.tab.Panel',
    
    requires: [
        'Ext.tab.*',
        'Ext.data.*',
        'Ext.dataentry.GridEntry'
    ],
    
    initComponent: function() {
        Ext.apply(this, {
			xtype: 'tabpanel',
			tabPosition: 'bottom',
			activeTab: 0,
			//height: 601,
            items: [{
					title: 'Compressor',
					items: Ext.create('Ext.dataentry.GridEntry'),
				}, {
					title: 'Genset',
					//items: Ext.create('Ext.dataentry.GridEntry'),
				}, {
					title: 'Pump',
					//items: Ext.create('Ext.dataentry.GridEntry'),
				}]
		});
        this.callParent();
    }
});
//*/
