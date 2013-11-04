Ext.define('Ext.calendar.data.Events', {

    statics: {
        getData: function() {
            var today = Ext.Date.clearTime(new Date()), 
                makeDate = function(d, h, m, s) {
                    d = d * 86400;
                    h = (h || 0) * 3600;
                    m = (m || 0) * 60;
                    s = (s || 0);
                    return Ext.Date.add(today, Ext.Date.SECOND, d + h + m + s);
                };
                
            return {
                "evts": [{
                    "id": 1001,
                    "cid": 2,
                    "title": "PM1500 GKM Comp#1",
                    "start": makeDate(-10, -11, 10),
                    "end": makeDate(-10, -11, 50),
                    "notes": "Have fun"
                }, {
                    "id": 1002,
                    "cid": 2,
                    "title": "PM1500 RBT Comp#2",
                    "start": makeDate(0, 11, 30),
                    "end": makeDate(0, 16, 50),
                    "loc": "Chuy's!",
                    "url": "http://chuys.com",
                    "notes": "Order the queso",
                    "rem": "15"
                }, {
                    "id": 1003,
                    "cid": 2,
                    "title": "PM9000 GKM Comp#3",
                    "start": makeDate(0, 11, 30),
                    "end": makeDate(2, 16, 50),
                    "loc": "Chuy's!",
                    "url": "http://chuys.com",
                    "notes": "Order the queso",
                    "rem": "15"
                }, {
                    "id": 1004,
                    "cid": 2,
                    "title": "PM18000 RBT Comp#2",
                    "start": makeDate(5, 11, 30),
                    "end": makeDate(7, 16, 50),
                    "loc": "Chuy's!",
                    "url": "http://chuys.com",
                    "notes": "Order the queso",
                }, {
                    "id": 1004,
                    "cid": 2,
                    "title": "PM18000 RBT Comp#2",
                    "start": makeDate(5, 11, 30),
                    "end": makeDate(7, 16, 50),
                    "loc": "Chuy's!",
                    "url": "http://chuys.com",
                    "notes": "Order the queso",
                }, {
                    "id": 1005,
                    "cid": 2,
                    "title": "GAS SALES RBT Comp#2",
                    "start": makeDate(-10, 11, 30),
                    "end": makeDate(-6, 16, 50),
                    "loc": "Chuy's!",
                    "url": "http://chuys.com",
                    "notes": "Order the queso",
                }, {
                    "id": 1111,
                    "cid": 1,
                    "title": "LGN Comp#1 DOWN",
                    "start": makeDate(-2, 10, 0),
                    "end": makeDate(-2, 11, 0),
                }, {
                    "id": 1112,
                    "cid": 1,
                    "title": "RBT Comp#1 DOWN",
                    "start": makeDate(0, 0, 15),
                    "end": makeDate(0, 11, 0),
				}, {
                    "id": 1113,
                    "cid": 1,
                    "title": "RBT Comp#2 DOWN",
                    "start": makeDate(1, 0, 15),
                    "end": makeDate(1, 11, 0),
                }, {
                    "id": 1114,
                    "cid": 1,
                    "title": "LGN Comp#2 DOWN",
                    "start": makeDate(0, 16, 15),
                    "end": makeDate(1, 17, 0),
                }, {
                    "id": 1115,
                    "cid": 1,
                    "title": "GKM Comp#2 DOWN",
                    "start": makeDate(-16, 16, 15),
                    "end": makeDate(-16, 17, 0),
                }, {
                    "id": 1116,
                    "cid": 1,
                    "title": "RBT Comp#3 DOWN",
                    "start": makeDate(-16, 1, 15),
                    "end": makeDate(-16, 1, 50),
                }, {
                    "id": 1117,
                    "cid": 1,
                    "title": "RBT Comp#3 DOWN",
                    "start": makeDate(-15, 1, 15),
                    "end": makeDate(-14, 1, 50),
                }, {
                    "id": 1118,
                    "cid": 1,
                    "title": "RBT Comp#2 DOWN",
                    "start": makeDate(-15, 12, 15),
                    "end": makeDate(-15, 12, 50),
                }, {
                    "id": 1119,
                    "cid": 1,
                    "title": "LGN Comp#2 DOWN",
                    "start": makeDate(-12, 12, 15),
                    "end": makeDate(-11, 12, 50),
                }, {
                    "id": 1120,
                    "cid": 1,
                    "title": "RBT Comp#2 DOWN",
                    "start": makeDate(-12, 2, 15),
                    "end": makeDate(-12, 4, 50),
                }, {
                    "id": 1121,
                    "cid": 1,
                    "title": "SKA Comp#1 DOWN",
                    "start": makeDate(-11, 2, 15),
                    "end": makeDate(-11, 4, 50),
                }, {
                    "id": 1031,
                    "cid": 3,
                    "title": "PDM LGN Genset#1 ",
                    "start": makeDate(-17,10, 0),
                    "end": makeDate(-17, 16, 0)
                 }, {
                    "id": 1032,
                    "cid": 3,
                    "title": "PDM MTR Genset#1 ",
                    "start": makeDate(-15,10, 0),
                    "end": makeDate(-15, 16, 0)
                }, {
                    "id": 1033,
                    "cid": 3,
                    "title": "PDM RBT Comp#1 ",
                    "start": makeDate(-14,10, 0),
                    "end": makeDate(-14, 16, 0)
                }, {
                    "id": 1034,
                    "cid": 3,
                    "title": "PDM IBL Comp#3 ",
                    "start": makeDate(-11,10, 10),
                    "end": makeDate(-11, 16, 15)
                }, {
                    "id": 1035,
                    "cid": 3,
                    "title": "PDM JNE Comp#3 ",
                    "start": makeDate(-8,10, 10),
                    "end": makeDate(-8, 16, 15)
                }, {
                    "id": 1036,
                    "cid": 3,
                    "title": "PDM JNE Comp#1 ",
                    "start": makeDate(10,10, 10),
                    "end": makeDate(10, 16, 15)
                 }, {
                    "id": 1037,
                    "cid": 3,
                    "title": "PDM MTR Comp#1 ",
                    "start": makeDate(13,10, 10),
                    "end": makeDate(14, 16, 15)
                }, {
                    "id": 1039,
                    "cid": 3,
                    "title": "PDM RBT Comp#1 ",
                    "start": makeDate(11,10, 10),
                    "end": makeDate(11, 16, 15)
                }]
            }
        }
    }
});
