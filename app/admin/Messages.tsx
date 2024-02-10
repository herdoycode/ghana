import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";

const Messages = async () => {
  const messages = await prisma.message.findMany();
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>View</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {messages.map((m) => (
          <Table.Row key={m.id}>
            <Table.Cell> {m.name} </Table.Cell>
            <Table.Cell> {m.email} </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="2">
                View
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button variant="outline" size="2" color="red">
                View
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Messages;
