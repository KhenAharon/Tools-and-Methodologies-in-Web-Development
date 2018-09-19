var expect    = require("chai").expect;
var calculator = require("../app/calculate");

describe('Test1 for calculator', function() {

    let s = null;
   
    it('check1', function() {
        s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql('1');
    });
   
    it('check2', function() {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql('12');
    });
    
    it('check3', function() {
        s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql('12');
    });
    
    it('check4', function() {
        s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql('4');
    });
    
    it('check5', function() {
        s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql('43');
    });

    it('check6', function() {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql('55');
    });
    
    it('check7', function() {
        s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql('55');
    });
   
    it('check8', function() {
        s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql('1');
    });
   
    it('check9', function() {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql('56');
    });
    
    it('check10', function() {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql('5');
    });
    
    it('check11', function() {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql('6');
    });
});

describe('Test2 for calculator', function() {
    let s = null;
    
    it('check12', function() {
        s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql('0');
    });
    
    it('check13', function() {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql('0');
    });
    
    it('check14', function() {
        s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql('0');
    });
    
    it('check15', function() {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql('0');
    });
    
    it('check16', function() {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql('0');
    });
   
    it('check17', function() {
        s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql('1');
    });
    
    it('check18', function() {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-1");
    });
});

describe('Test3 for calculator', function() {
    let s = null;
    
    it('check19', async () => {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql('0');
    });
   
    it('check20', async () => {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql('2');
    });
   
    it('check21', async () => {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql('22');
    });
    
    it('check22', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql('0');
    });
    
    it('check23', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql('0');
    });
    
    it('check24', async () => {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql('0');
    });
    
    it('check25', async () => {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql('5');
    });
    
    it('check26', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-5");
    });
});

describe('Test4 for calculator', function() {
    let s = null;
   
    it('check27', async () => {
        s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check28', async () => {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("12");
    });
    
    it('check29', async () => {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("12");
    });
    
    it('check30', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("144");
    });
});

describe('Test5 for calculator', function() {
    let s = null;
    
    it('check31', async () => {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");
    });
    
    it('check32', async () => {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check33', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-5");
    });
    
    it('check34', async () => {
        s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("-5");
    });
    
    it('check35', async () => {
        s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("6");
    });
   
    it('check36', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test6 for calculator', function() {
    let s = null;
    
    it('check37', async () => {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");
    });
    
    it('check38', async () => {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check39', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-5");
    });
   
    it('check40', async () => { s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("-5");
    });
    
    it('check41', async () => {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("-5");
    });
    
    it('check42', async () => {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check43', async () => {
        s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("20");
    });
    
    it('check44', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-100");
    });
});
describe('Test7 for calculator', function() {
    let s = null;
    
    it('check45', async () => {
        s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check46', async () => {
        s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("30");
    });
    
    it('check47', async () => {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("30");
    });
    
    it('check48', async () => {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check49', async () => {
        s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("25");
    });
    
    it('check50', async () => {
        s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check51', async () => {
        s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("5");
    });
    
    it('check52', async () => {
        s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
   
    it('check53', async () => { 
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("2");
    });
    
    it('check54', async () => {
        s = calculator.calculateNextState(s, "8");
        expect((s).display).to.eql("8");
    });
   
    it('check55', async () => { 
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("16");
    });
});
describe('Test8 for calculator', function() {
    let s = null;
    
    it('check56', async () => {
        s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("0");
    });
    
    it('check57', async () => {
        s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("6");
    });
   
    it('check58', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("6");
    });
    
    it('check59', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("12");
    });
    
    it('check60', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("18");
    });
});
describe('Test9 for calculator', function() {
    let s = null;
   
    it('check61', async () => {
        s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check62', async () => {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("2");
    });
    
    it('check63', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4");
    });
    
    it('check64', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("8");
    });
   
    it('check65', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("16");
    });
});
describe('Test10 for calculator', function() {
    let s = null;
    
    it('check66', async () => {
        s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check67', async () => {
        s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("40");
    });
    
    it('check68', async () => {
        s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("40");
    });
    
    it('check69', async () => {
        s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check70', async () => {
        s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("10");
    });
    
    it('check71', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("400");
    });
   
    it('check72', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4000");
    });
   
    it('check73', async () => {
        s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("40000");
    });
});
describe('Test11 for calculator', function() {
    let s = null;
    it('check74', async () => {
		s = calculator.calculateNextState(s, "8");
        expect((s).display).to.eql("8");
    });
    it('check75', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("8");
    });
    
    it('check76', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check77', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4");
    });
    
    it('check78', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check79', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("5");
    });
    
    it('check80', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check81', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("7");
    });
});
describe('Test12 for calculator', function() {
    let s = null;
    
    it('check82', async () => {
		s = calculator.calculateNextState(s, "9");
        expect((s).display).to.eql("9");
    });
    
    it('check83', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("93");
    });
    
    it('check84', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("93");
    });
    
    it('check85', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check86', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("2");
    });
    
    it('check87', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check88', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-1");
    });
    
    it('check89', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("-1");
    });
    
    it('check90', async () => {
		s = calculator.calculateNextState(s, "-"); //an operation cancels previous operation
        expect((s).display).to.eql("-1");
    });
    
    it('check91', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check92', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-2");
    });
    
    it('check93', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("-2");
    });
    
    it('check94', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test13 for calculator', function() {
    let s = null;
    
    it('check95', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("6");
    });
    
    it('check96', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("6");
    });
    
    it('check97', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check98', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("2");
    });
    
    it('check99', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check100', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
    
    it('check101', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4");
    });
});
describe('Test14 for calculator', function() {
    let s = null;
    
    it('check102', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check103', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("21");
    });
    
    it('check104', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("21");
    });
    
    it('check105', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check106', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
});
describe('Test15 for calculator', function() {
    let s = null;
    
    it('check107', async () => {
		s = calculator.calculateNextState(s, "8");
        expect((s).display).to.eql("8");
    });
    
    it('check108', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("8");
    });
    
    it('check109', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check110', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("1");
    });
    
    it('check111', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check112', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("-1");
    });
});
describe('Test16 for calculator', function() {
    let s = null;
    
    it('check113', async () => {
		s = calculator.calculateNextState(s, "8");
        expect((s).display).to.eql("8");
    });
    
    it('check114', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("8");
    });
    
    it('check115', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check116', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("1");
    });
    
    it('check117', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check118', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("-1");
    });
    
    it('check119', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test17 for calculator', function() {
    let s = null;
    
    it('check120', async () => {
		s = calculator.calculateNextState(s, "8");
        expect((s).display).to.eql("8");
    });
    
    it('check121', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("8");
    });
    
    it('check122', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check123', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("1");
    });
    
    it('check124', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check125', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("-1");
    });
    
    it('check126', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check127', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
    
    it('check128', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("2");
    });
});
describe('Test18 for calculator', function() {
    let s = null;
    
    it('check129', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check130', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("1");
    });
    
    it('check131', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check132', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4");
    });
    
    it('check133', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("7");
    });
});
describe('Test18 for calculator', function() {
    let s = null;
    
    it('check134', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("0");
    });
    
    it('check135', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("0");
    });
    
    it('check136', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");
    });
    
    it('check137', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check138', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test19 for calculator', function() {
    let s = null;
    
    it('check139', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check140', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check141', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("0");
    });
    
    it('check142', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");
    });
    
    it('check143', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check144', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test20 for calculator', function() {
    let s = null;
    
    it('check145', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check146', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("45");
    });
    
    it('check147', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("450");
    });
    
    it('check148', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("450");
    });
    
    it('check149', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test21 for calculator', function() {
    let s = null;
    
    it('check150', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check151', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("45");
    });
    
    it('check152', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("450");
    });
    
    it('check153', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("450");
    });
    
    it('check154', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("202500");
    });
});
describe('Test21 for calculator', function() {
    let s = null;
    
    it('check155', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check156', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("36");
    });
    
    it('check157', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("36");
    });
    
    it('check158', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("72");
    });
    
    it('check159', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("108");
    });
});
describe('Test22 for calculator', function() {
    let s = null;
    
    it('check160', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check161', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("36");
    });
    
    it('check162', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("36");
    });
    
    it('check163', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check164', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-36");
    });
});
describe('Test23 for calculator', function() {
    let s = null;
    
    it('check165', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check166', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("36");
    });
    
    it('check167', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("36");
    });
    
    it('check168', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check169', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("20");
    });
    
    it('check170', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("16");
    });
});
describe('Test24 for calculator', function() {
    let s = null;
    
    it('check171', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check172', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("36");
    });
    
    it('check173', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("36");
    });
    
    it('check174', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check175', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("20");
    });
    
    it('check176', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("16");
    });
    
    it('check177', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check178', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("32");
    });
});
describe('Test25 for calculator', function() {
    let s = null;
    
    it('check179', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check180', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("36");
    });
    
    it('check181', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("36");
    });
    
    it('check182', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check183', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("20");
    });
    
    it('check184', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("16");
    });
    
    it('check185', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check186', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("32");
    });
});
describe('Test26 for calculator', function() {
    let s = null;
    
    it('check187', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check188', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("32");
    });
    
    it('check189', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("32");
    });
    
    it('check190', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check191', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("16");
    });
    
    it('check192', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check193', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("51");
    });
    
    it('check194', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("67");
    });
    
    it('check195', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check196', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("67");
    });
});
describe('Test27 for calculator', function() {
    let s = null;
    
    it('check197', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("6");
    });
    
    it('check198', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("6");
    });
    
    it('check199', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check200', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("30");
    });
    
    it('check201', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("150");
    });
});
describe('Test28 for calculator', function() {
    let s = null;
    
    it('check202', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("0");
    });
    
    it('check203', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("0");
    });
    
    it('check204', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check205', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("1");
    });
    
    it('check206', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test29 for calculator', function() {
    let s = null;
    
    it('check207', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("0");
    });
    
    it('check208', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check209', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("11");
    });
    
    it('check210', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("111");
    });
    
    it('check211', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("111");
    });
    
    it('check212', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check213', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("37");
    });
    
    it('check214', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check215', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("37");
    });
    
    it('check216', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test30 for calculator', function() {
    let s = null;
    
    it('check217', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("0");
    });
    
    it('check218', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check219', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("11");
    });
    
    it('check220', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("111");
    });
    
    it('check221', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("111");
    });
    
    it('check222', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check223', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("37");
    });
    
    it('check224', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check225', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("37");
    });
    
    it('check226', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test31 for calculator', function() {
    let s = null;
    
    it('check227', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("0");
    });
    
    it('check228', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check229', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("0");
    });
    
    it('check230', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check231', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test32 for calculator', function() {
    let s = null;
    
    it('check232', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("0");
    });
    
    it('check233', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test33 for calculator', function() {
    let s = null;
    
    it('check234', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("0");
    });
    
    it('check235', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test34 for calculator', function() {
    let s = null;
    
    it('check236', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");
    });
    
    it('check237', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
});
describe('Test35 for calculator', function() {
    let s = null;
    
    it('check238', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check239', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("45");
    });
    
    it('check240', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("45");
    });
    
    it('check241', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check242', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("40");
    });
});
describe('Test36 for calculator', function() {
    let s = null;
    
    it('check243', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check244', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("26");
    });
    
    it('check245', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("26");
    });
    
    it('check246', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check247', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("29");
    });
});
describe('Test37 for calculator', function() {
    let s = null;
    
    it('check248', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check249', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("21"); //blackjack
    });
    
    it('check250', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("21");
    });
    
    it('check251', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check252', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
});
describe('Test38 for calculator', function() {
    let s = null;
    
    it('check253', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check254', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("54");
    });
    
    it('check255', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("54");
    });
    
    it('check256', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test39 for calculator', function() {
    let s = null;
    
    it('check257', async () => {
		s = calculator.calculateNextState(s, "4");
        expect((s).display).to.eql("4");
    });
    
    it('check258', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("40");
    });
    
    it('check259', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("40");
    });
    
    it('check260', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check261', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("80");
    });
    
    it('check262', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("160");
    });
});
describe('Test40 for calculator', function() {
    let s = null;
    
    it('check263', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check264', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("3");
    });
    
    it('check265', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check266', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("2");
    });
    
    it('check267', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
    
    it('check268', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("0");
    });
    
    it('check269', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-1");
    });
    
    it('check270', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("-1");
    });
    
    it('check271', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check272', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-5");
    });
});
describe('Test41 for calculator', function() {
    let s = null;
    
    it('check273', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check274', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("21");
    });
    
    it('check275', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("211");
    });
    
    it('check276', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("2111");
    });
    
    it('check277', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("21111");
    });
    
    it('check278', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("21111");
    });
    
    it('check279', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check280', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("7037");
    });
});
describe('Test42 for calculator', function() {
    let s = null;
    
    it('check281', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check282', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("7");
    });
    
    it('check283', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check284', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("10");
    });
    
    it('check285', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check286', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("20");
    });
});
describe('Test43 for calculator', function() {
    let s = null;
    
    it('check287', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check288', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("7");
    });
    
    it('check289', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check290', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("10");
    });
});
describe('Test44 for calculator', function() {
    let s = null;
    
    it('check291', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check292', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("7");
    });
    
    it('check293', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check294', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("4");
    });
    
    it('check295', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("1");
    });
});
describe('Test45 for calculator', function() {
    let s = null;
    
    it('check296', async () => {
		s = calculator.calculateNextState(s, "7");
        expect((s).display).to.eql("7");
    });
    
    it('check297', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("7");
    });
    
    it('check298', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check299', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("14");
    });
    
    it('check300', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("28");
    });
});
describe('Test45 for calculator', function() {
    let s = null;
    
    it('check301', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check302', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("3");
    });
    
    it('check303', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check304', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
});
describe('Test46 for calculator', function() {
    let s = null;
    
    it('check305', async () => {
		s = calculator.calculateNextState(s, "6");
        expect((s).display).to.eql("6");
    });
    
    it('check306', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("6");
    });
    
    it('check307', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check308', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("2");
    });
});
describe('Test47 for calculator', function() {
    let s = null;
    
    it('check309', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check310', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("3");
    });
    
    it('check311', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check312', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
    
    it('check313', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("3");
    });
});
describe('Test48 for calculator', function() {
    let s = null;
    
    it('check314', async () => {
		s = calculator.calculateNextState(s, "3");
        expect((s).display).to.eql("3");
    });
    
    it('check315', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("35");
    });
    
    it('check316', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("35");
    });
    
    it('check317', async () => {
		s = calculator.calculateNextState(s, "2");
        expect((s).display).to.eql("2");
    });
    
    it('check318', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("70");
    });
    
    it('check319', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("140");
    });
    
    it('check320', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("140");
    });
    
    it('check321', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check322', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("139");
    });
});
describe('Test49 for calculator', function() {
    let s = null;
    
    it('check323', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("1");
    });
    
    it('check324', async () => {
		s = calculator.calculateNextState(s, "1");
        expect((s).display).to.eql("11");
    });
    
    it('check325', async () => {
		s = calculator.calculateNextState(s, "*");
        expect((s).display).to.eql("11");
    });
    
    it('check326', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("121");
    });
});
describe('Test50 for calculator', function() {
    let s = null;
    
    it('check327', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check328', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("50");
    });
    
    it('check329', async () => {
		s = calculator.calculateNextState(s, "+");
        expect((s).display).to.eql("50");
    });
    
    it('check330', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5");
    });
    
    it('check331', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("50");
    });
    
    it('check332', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("100"); 
    });
    it('check333', async () => {
		s = calculator.calculateNextState(s, "/");
        expect((s).display).to.eql("100");  
    });
    it('check334', async () => {
		s = calculator.calculateNextState(s, "0");
        expect((s).display).to.eql("0");  
    });
    it('check335', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("ERROR");  
    });
    it('check336', async () => {
		s = calculator.calculateNextState(s, "-");
        expect((s).display).to.eql("0");  
    });
    it('check337', async () => {
		s = calculator.calculateNextState(s, "5");
        expect((s).display).to.eql("5"); 
    });
    it('check338', async () => {
		s = calculator.calculateNextState(s, "=");
        expect((s).display).to.eql("-5");  // We can sleep well at night.
    });
   
});

