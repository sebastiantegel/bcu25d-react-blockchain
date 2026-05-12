// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PersonsContract {
    uint nextId = 0;
    uint public numberOfPersons = 0;

    struct Persons {
        uint id;
        string name;
        uint age;
        bool isMarried;
    }

    event PersonCreated(uint id);
    event PersonDeleted(uint id);
    event PersonsIndex(uint[] ids);

    mapping(uint => Persons) public persons;
    uint[] public personList;

    function createPerson(
        string memory _name,
        uint _age,
        bool _isMarried
    ) public {
        nextId++;
        numberOfPersons++;
        persons[nextId] = Persons(nextId, _name, _age, _isMarried);
        personList.push(nextId);
        emit PersonCreated(nextId);
    }

    function removePerson(uint id) public {
        numberOfPersons--;
        delete persons[id];

        for (uint i = 0; i < personList.length; i++) {
            if (personList[i] == id) {
                personList[i] = personList[personList.length - 1];
                personList.pop();
                break;
            }
        }

        emit PersonDeleted(id);
    }

    function getIndexList() public view returns (uint[] memory) {
        return personList;
    }

    constructor() {
        createPerson("Sebastian", 46, true);
        createPerson("Hanna", 46, true);
    }
}
