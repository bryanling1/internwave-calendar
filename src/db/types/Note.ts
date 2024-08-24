export interface INote{
    id: string
    title: string
    text?: string
    startDate?: number
    endDate?: number
}

export enum NoteID{
    ID = "id",
    Title = "title",
    Start = "start",
    End = "end",
    Text = "text"
}