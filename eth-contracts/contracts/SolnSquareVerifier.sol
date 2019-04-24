pragma solidity >=0.4.21 <0.6.0;

// define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './ERC721Mintable.sol';
import "./verifier.sol";

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {

    // define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 _index;
        address _owner;
    }

    // define an array of the above struct
    // Solution[] private solutions;

    // define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutionsMapping;

    // Create an event to emit when a solution is added
    event SolutionAdded(address owner, uint256 index);

    //Define Verifier
    Verifier public verifier;

    constructor (address verifierAddress) public {
        verifier = Verifier(verifierAddress);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 index, address owner, bytes32 key) internal {
        Solution memory sol = Solution({_index: index, _owner: owner});
        solutionsMapping[key] = sol;
        
        emit SolutionAdded(owner, index);
    }

    // Create a function to mint new NFT only after the solution has been verified
    function verifyMint (address to, uint256 tokenId, uint[2] memory a, uint[2] memory a_p, uint[2][2] memory b,
            uint[2] memory b_p, uint[2] memory c, uint[2] memory c_p, uint[2] memory h, uint[2] memory k, 
            uint[2] memory input) public {
        bytes32 key = keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
        
        //  - make sure the solution is unique (has not been used before)
        require(solutionsMapping[key]._owner == address(0), "Solution already used.");

        addSolution(tokenId, to, key);

        //  - make sure you handle metadata as well as tokenSuplly
        super.mint(to, tokenId);
    }
}