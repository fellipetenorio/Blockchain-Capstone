var SquareVerifier = artifacts.require('Verifier');
var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            var vc = await SquareVerifier.new({from: account_one});
            this.contract = await ERC721MintableComplete.new(vc.address, {from: account_one});
            // mint multiple tokens
            await this.contract.mint(account_two, 1, {from: account_one});
        })

        it('should return total supply', async function () { 
            var count = await this.contract.totalSupply({from: account_one});
            assert.equal(count, 1, "Incorrect Tokens Count");
        })

        it('should get token balance', async function () { 
            var balance = await this.contract.balanceOf(account_two, {from: account_two});
            assert.equal(balance, 1, "Incorrect Balance");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            var tokenUri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
            var createdUri = await this.contract.tokenURI(1);
            assert.equal(tokenUri, createdUri, "Invalid URI");
        })

        it('should transfer token from one owner to another', async function () {
            let a3 = accounts[2];
            await this.contract.transferFrom(account_two, account_three, 1, {from: account_two});
            var to = await this.contract.ownerOf(1, {from: a3});
            assert.equal(to, a3, "Error in transfer");
        })
    });

    // TODO
    describe('have ownership properties', function () {
        beforeEach(async function () { 
            var vc = await SquareVerifier.new({from: account_one});
            this.contract = await ERC721MintableComplete.new(vc.address, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let result = true;
            try {
                await this.contract.mint(account_two, 1, {from: account_two});
            } catch(e) {
                result = false;
            }
            assert.equal(result, false, "Token minted");
        })

        it('should return contract owner', async function () { 
            let o = await this.contract._owner.call();
            assert.equal(o, account_one, "Problem to recover the contract owner");
        })

    });
});

// util functions