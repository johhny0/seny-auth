import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Auth {

    @PrimaryGeneratedColumn("uuid")
    id?: string; 

    @Column()
    name?: string;

    @Column({ select: false })
    password?: string;

    @Column()
    email?: string;

    @Column()
    profilePicture?: string;
 
}
