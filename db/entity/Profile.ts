
import { text } from "stream/consumers";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Profile extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number ;

    @Column({type: 'text'  , nullable:true})
    bio : string
    
    @Column({type: 'text', default:'http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&psig=AOvVaw2ipeKK-qvAw9jbB29EN7em&ust=1692530105036000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjey4_M6IADFQAAAAAdAAAAABAE'})
    imageURL : string 


}
