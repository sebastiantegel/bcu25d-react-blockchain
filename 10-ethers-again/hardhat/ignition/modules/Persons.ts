import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("PersonsModule", (m) => {
  const persons = m.contract("PersonsContract");

  return { persons };
});
