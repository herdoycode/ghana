import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";

const Subscribers = async () => {
  const subscribers = await prisma.subscriber.findMany();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>View</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {subscribers.map((s) => (
          <Table.Row key={s.id}>
            <Table.Cell> {s.email} </Table.Cell>

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

export default Subscribers;
