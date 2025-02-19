import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class LoginEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    url: string;

    @Column()
    notes: string;
}