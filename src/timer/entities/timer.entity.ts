import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Timer {
    @PrimaryGeneratedColumn()
    timerID : number

    @Column()
    punchName : string

    @Column()
    hours : number

    @Column()
    minutes : number

    @Column()
    seconds : number

}


