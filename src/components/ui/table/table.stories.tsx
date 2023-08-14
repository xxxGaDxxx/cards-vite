import { useMemo, useState } from 'react'

import { Meta } from '@storybook/react'

import { Typography } from '../typography'

import { ColumnType, SortType, Table } from './'

export default {
  title: 'Table/Table',
  component: Table.Root,
} satisfies Meta<typeof Table.Root>

export const Default = {
  args: {
    children: (
      <>
        <Table.Thead>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align="center">Описание</Table.HeadCell>
            <Table.HeadCell>Ссылка</Table.HeadCell>
            <Table.HeadCell>Тип</Table.HeadCell>
            <Table.HeadCell>Вид</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Thead>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography
                as={'a'}
                variant={'link1'}
                href="https://it-incubator.io/"
                target="_blank"
              >
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography>
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>🦎</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
              источник
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>✨</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

const data = [
  {
    id: '01',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
  {
    id: '02',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка куда-то',
    category: 'Основной',
    type: 'Читать',
  },
  {
    id: '03',
    title: 'Web Basic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
    category: 'Основной',
    type: 'Читать',
  },
]

export const WithMapMethod = {
  args: {
    children: (
      <>
        <Table.Thead>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align="center">Описание</Table.HeadCell>
            <Table.HeadCell>Ссылка</Table.HeadCell>
            <Table.HeadCell>Тип</Table.HeadCell>
            <Table.HeadCell>Вид</Table.HeadCell>
          </Table.Row>
        </Table.Thead>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.link}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}
export const WithSort = {
  render: (args: any) => {
    const [sort, setSort] = useState<SortType>(null)
    const sortString: string | null = sort ? `${sort?.key}-${sort?.direction}` : null

    const columns: ColumnType[] = [
      {
        key: 'title',
        title: 'Name',
        sortable: true,
      },
      {
        key: 'cardsCount',
        title: 'Cards',
        sortable: true,
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        title: 'Created by',
        sortable: true,
      },
      {
        key: 'options',
        title: '',
      },
    ]
    const data1 = [
      {
        title: 'Project A',
        cardsCount: 10,
        updated: '2023-07-07',
        createdBy: 'John Doe',
      },
      {
        title: 'Project B',
        cardsCount: 5,
        updated: '2023-07-06',
        createdBy: 'Jane Smith',
      },
      {
        title: 'Project C',
        cardsCount: 8,
        updated: '2023-07-05',
        createdBy: 'Alice Johnson',
      },
      {
        title: 'Project D',
        cardsCount: 3,
        updated: '2023-07-07',
        createdBy: 'Bob Anderson',
      },
      {
        title: 'Project E',
        cardsCount: 12,
        updated: '2023-07-04',
        createdBy: 'Emma Davis',
      },
    ]
    const sortedData = useMemo(() => {
      if (!sortString) {
        return data1
      }
      const [key, direction] = sortString.split('-')

      return [...data1].sort((a, b) => {
        if (direction === 'asc') {
          return a[key as keyof typeof a] > b[key as keyof typeof b] ? 1 : -1
        }

        return a[key as keyof typeof a] < b[key as keyof typeof b] ? 1 : -1
      })
    }, [sortString])

    return (
      <Table.Root {...args} style={{ width: '100%' }}>
        <Table.Header columns={columns} onSort={setSort} sort={sort} />
        <Table.Body>
          {sortedData.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icons...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}
