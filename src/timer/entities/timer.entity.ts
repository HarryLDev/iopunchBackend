import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Timer {
    @PrimaryGeneratedColumn()
    timerID : number

    @Column()
    punchName : string

    @Column()
    hour : number

    @Column()
    minute : number

    @Column()
    second : number

}


