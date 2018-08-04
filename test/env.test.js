import { expect } from 'chai';

import { IsENVDev, IsENVProd, IsENVTest, GetENV, IsENVStag } from '../src';

describe('#env NODE_ENV test', () => {
    it('should return dev&prod as false if NODE_ENV=test', () => {
        expect(GetENV()).to.be.eql('test');
        expect(IsENVTest).to.be.true;
        expect(IsENVDev).to.be.false;
        expect(IsENVStag).to.be.false;
        expect(IsENVProd).to.be.false;
    });
});
