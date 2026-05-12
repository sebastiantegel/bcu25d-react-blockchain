// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

import {PersonsContract} from "./Persons.sol";
import {Test} from "forge-std/Test.sol";

contract PersonTest is Test {
    PersonsContract persons;

    function setUp() public {
        persons = new PersonsContract();
    }

    // Constructor seeds two persons, so numberOfPersons should be 2
    function test_InitialNumberOfPersons() public view {
        require(
            persons.numberOfPersons() == 2,
            "Initial number of persons should be 2"
        );
    }

    // Constructor creates "Sebastian" as id=1 and "Hanna" as id=2
    function test_InitialPersonsExist() public view {
        (uint id1, string memory name1, uint age1, bool isMarried1) = persons
            .persons(1);
        require(id1 == 1, "First person id should be 1");
        require(
            keccak256(bytes(name1)) == keccak256(bytes("Sebastian")),
            "First person name should be Sebastian"
        );
        require(age1 == 46, "First person age should be 46");
        require(isMarried1 == true, "First person should be married");

        (uint id2, string memory name2, uint age2, bool isMarried2) = persons
            .persons(2);
        require(id2 == 2, "Second person id should be 2");
        require(
            keccak256(bytes(name2)) == keccak256(bytes("Hanna")),
            "Second person name should be Hanna"
        );
        require(age2 == 46, "Second person age should be 46");
        require(isMarried2 == true, "Second person should be married");
    }

    // Creating a new person should increment numberOfPersons
    function test_CreatePerson() public {
        persons.createPerson("Alice", 30, false);
        require(
            persons.numberOfPersons() == 3,
            "numberOfPersons should be 3 after creating one more"
        );
    }

    // Created person should be retrievable with correct data
    function test_CreatePersonData() public {
        persons.createPerson("Bob", 25, true);
        // nextId will be 3 (two created in constructor)
        (uint id, string memory name, uint age, bool isMarried) = persons
            .persons(3);
        require(id == 3, "New person id should be 3");
        require(
            keccak256(bytes(name)) == keccak256(bytes("Bob")),
            "New person name should be Bob"
        );
        require(age == 25, "New person age should be 25");
        require(isMarried == true, "New person should be married");
    }

    // Removing a person should decrement numberOfPersons
    function test_RemovePerson() public {
        persons.removePerson(1);
        require(
            persons.numberOfPersons() == 1,
            "numberOfPersons should be 1 after removal"
        );
    }

    // Removed person's data should be zeroed out
    function test_RemovePersonClearsData() public {
        persons.removePerson(1);
        (uint id, string memory name, uint age, bool isMarried) = persons
            .persons(1);
        require(id == 0, "Deleted person id should be 0");
        require(bytes(name).length == 0, "Deleted person name should be empty");
        require(age == 0, "Deleted person age should be 0");
        require(isMarried == false, "Deleted person isMarried should be false");
    }

    // getIndexList should return the list of created person ids
    function test_GetIndexList() public view {
        uint[] memory list = persons.getIndexList();
        require(
            list.length == 2,
            "Index list length should be 2 after construction"
        );
        require(list[0] == 1, "First index should be 1");
        require(list[1] == 2, "Second index should be 2");
    }

    // getIndexList should grow as persons are added
    function test_GetIndexListAfterCreate() public {
        persons.createPerson("Charlie", 40, false);
        uint[] memory list = persons.getIndexList();
        require(
            list.length == 3,
            "Index list length should be 3 after adding one more"
        );
        require(list[2] == 3, "Third index should be 3");
    }

    // CreatePerson should emit PersonCreated event
    function test_CreatePersonEmitsEvent() public {
        vm.expectEmit(false, false, false, true);
        emit PersonsContract.PersonCreated(3);
        persons.createPerson("Dave", 55, false);
    }

    // RemovePerson should emit PersonDeleted event
    function test_RemovePersonEmitsEvent() public {
        vm.expectEmit(false, false, false, true);
        emit PersonsContract.PersonDeleted(1);
        persons.removePerson(1);
    }
}
