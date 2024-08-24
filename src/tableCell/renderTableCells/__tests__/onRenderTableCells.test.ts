import { describe, expect, test } from 'vitest';
import { IJobData } from '../../db/types/JobData';
import { Icons, ITableCell, TableCellElementType } from '@internwave/extensions-api';
import { MAX_NOTES, onRenderTableCells } from '../onRenderTableCells';
import { ButtonId } from '../src/types/ButtonId';

describe('onRenderTableCells', () => {
  test('Jobs with no initial notes still renders add buttons', async () => {
    const input:IJobData[] = [
        {
            extensionData: {
                notes: []
            },
            id: '1'
        },
        {
            extensionData: {},
            id: '2'
        },
        {
            extensionData: {},
            id: '3'
        }
    ]
    const expected:ITableCell[] = [
        {
            elements: [
                {
                    type: TableCellElementType.IconButton,
                    id: ButtonId.ADD,
                    icon: {
                        type: Icons.ADD
                    }
                }
            ]
        },
        {
            elements: [
                {
                    type: TableCellElementType.IconButton,
                    id: ButtonId.ADD,
                    icon: {
                        type: Icons.ADD
                    }
                }
            ]
        },
        {
            elements: [
                {
                    type: TableCellElementType.IconButton,
                    id: ButtonId.ADD,
                    icon: {
                        type: Icons.ADD
                    }
                }
            ]
        }
    ]
    expect(await onRenderTableCells(input)).toStrictEqual(expected);
  });

  test("A job with less than MAX_NOTES notes renders all notes and an add button", async () => {
    const input:IJobData[] = [
        {
            extensionData: {
                notes: []
            },
            id: '1'
        },
    ]
    for(let i = 0; i < MAX_NOTES; i++){
        input[0].extensionData.notes?.push({
            title: `Note ${i + 1}`,
        })
    }
    const expected:ITableCell[] = [{elements: []}]
    for(let i=0; i<MAX_NOTES; i++){
        expected[0].elements.push({
            type: TableCellElementType.IconButton,
            id: i.toString(),
            icon: {
                type: Icons.NOTE,
                color: undefined
            },
            tooltip: {
                title: {
                    text: `Note ${i + 1}`,
                    fontWeight: 'bold'
                },
                subtitles: undefined
            }
        
        })
    }
    expected[0].elements.push({
        type: TableCellElementType.IconButton,
        id: ButtonId.ADD,
        icon: {
            type: Icons.ADD
        }
    })
    expect(await onRenderTableCells(input)).toStrictEqual(expected)
  })

  test("A job with more than MAX_NOTES notes renders all notes and an add button", async () => {
    const input:IJobData[] = [
        {
            extensionData: {
                notes: []
            },
            id: '1'
        },
    ]
    for(let i = 0; i < MAX_NOTES + 4; i++){
        input[0].extensionData.notes?.push({
            title: `Note ${i + 1}`,
        })
    }
    const expected:ITableCell[] = [{elements: []}]
    for(let i=0; i<MAX_NOTES; i++){
        expected[0].elements.push({
            type: TableCellElementType.IconButton,
            id: i.toString(),
            icon: {
                type: Icons.NOTE,
                color: undefined
            },
            tooltip: {
                title: {
                    text: `Note ${i + 1}`,
                    fontWeight: 'bold'
                },
                subtitles: undefined
            }
        
        })
    }
    expected[0].elements.push({
        type: TableCellElementType.IconButton,
        id: ButtonId.MORE,
        icon: {
            type: Icons.CIRCLE,
            text: `+${4}`
        }
    })
    expected[0].elements.push({
        type: TableCellElementType.IconButton,
        id: ButtonId.ADD,
        icon: {
            type: Icons.ADD
        }
    })
    expect(await onRenderTableCells(input)).toStrictEqual(expected)
  })
});