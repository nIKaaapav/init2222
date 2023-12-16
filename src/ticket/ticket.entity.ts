import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('TicketV2', { database: "MtWinTicket", schema: "dbo" })
export class Ticket {
  @PrimaryColumn({
    type: 'uuid',
    name: 'Id',
    nullable: false,
    comment:
      'This column represents the id of the entity. It composes the primary key of the table',
  })
  id: string;

  @Column({ name: 'Number', type: 'nvarchar', length: 128, nullable: false })
  number: string;

  @Column({ name: 'CustomerId', type: 'uuid', nullable: false })
  customer_id: string;

  @Column({ name: 'DateOfIssue', type: 'datetime', nullable: false })
  date_of_issue: Date;

  @Column({ name:'TicketName', type: 'nvarchar', nullable: true })
  ticket_name: string;

  @Column({ name:'TermInDays', type: 'int', nullable: true })
  term_in_days: number;

  @Column({ name:'OfficeId', type: 'int', nullable: true })
  office_id: number;

  @Column({ name:'StateId', type: 'int', nullable: true })
  state_id: number;

  @Column({ name:'TicketTypeId', type: 'int', nullable: true })
  ticket_type_id: number;

  @Column({ name:'InterestRate', type: 'decimal', nullable: true })
  interest_rate: any;

  @Column({ name:'ContractKind', type: 'int', nullable: true })
  contract_kind: number;

  @Column({ name:'PeriodSpan', type: 'int', nullable: true })
  period_span: number;

  
  

//   @Column({ type: 'simple-array' })
//   roles: string[];

//   @Column({ type: 'bool', default: true })
//   status: boolean;

//   @Column({ name: 'created_at', type: 'timestamp' })
//   createdAt: Date;

//   @BeforeInsert()
//   @BeforeUpdate()
//   async hashPassword() {
//     if (!this.password) {
//       return;
//     }
//     this.password = await hash(this.password, 10);
//   }

//   @OneToOne(
//     _ => Post,
//     post => post.author,
//     { cascade: true },
//   )
//   posts: Post;
}
