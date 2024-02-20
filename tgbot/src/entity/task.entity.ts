import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string
}