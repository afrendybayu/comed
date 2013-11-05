/*******************************
 *	Afrendy Bayu, 3 Nov 2013  *
 *	 ngelu sinau extjs dulu   *
********************************/

Ext.define('Ext.appHir.Hirarki', {
    extend: 'Ext.tree.Panel',
    
    requires: [
        'Ext.tree.*',
        'Ext.data.*'
    ],
    xtype: 'tree-reorder',
    
    
    height: 362,
    width: 220,
    //title: 'Files',
    useArrows: true,
    rootVisible: false,
    
    initComponent: function() {
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
                proxy: {
                    type: 'ajax',
                    //url: 'php/get-nodes.php',
                    url: 'hirarki/treegrid.json',
                    //extraParams: {
                    //    path: 'extjs'
                    //}
                },
                root: {
                    text: 'Medco Energy SSE',
                    id: 'src',
                    expanded: true
                },
                folderSort: true,
                sorters: [{
                    property: 'text',
                    direction: 'ASC'
                }]
            }),
            viewConfig: {
                plugins: {
                    ptype: 'treeviewdragdrop',
                    containerScroll: true
                }
            },
            tbar: [{
                text: 'Expand All',
                scope: this,
                handler: this.onExpandAllClick
            }, {
                text: 'Collapse All',
                scope: this,
                handler: this.onCollapseAllClick
            }]
        });
        this.callParent();
    },
    
    onExpandAllClick: function(){
        var me = this,
            toolbar = me.down('toolbar');
            
        me.getEl().mask('Expanding tree...');
        toolbar.disable();
                    
        this.expandAll(function() {
            me.getEl().unmask();
            toolbar.enable();
        });
    },
    
    onCollapseAllClick: function(){
        var toolbar = this.down('toolbar');
        
        toolbar.disable();
        this.collapseAll(function() {
            toolbar.enable();
        });
    }
});
