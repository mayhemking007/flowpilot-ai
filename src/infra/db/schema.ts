import { jsonb, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";


export const workflows = pgTable('workflows',{
    id : uuid("id").defaultRandom().primaryKey(),
    name : varchar('name', {length : 255}).notNull(),
    definition : jsonb('definition').notNull(),
    createdAt : timestamp("created_at").defaultNow(),
    updatedAt : timestamp('updated_at').defaultNow()
});

export const workflowRuns = pgTable('workflow_runs', {
    id : uuid('id').defaultRandom().primaryKey(),
    workflowId : uuid("workflow_id").references(() => workflows.id).notNull(),
    status : varchar('status', {length : 255}).notNull(),
    output : jsonb('output'),
    input : jsonb('input'),
    startedAt : timestamp('started_at'),
    completedAt : timestamp('compeleted_at')
});

export const nodeExecutions = pgTable('node_executions', {
    id : uuid('id').defaultRandom().primaryKey(),
    runId : uuid('run_id').references(() => workflowRuns.id).notNull(),
    nodeId : varchar('node_id', {length : 255}).notNull(),
    nodeType : varchar('node_type', {length : 255}).notNull(),
    status : varchar('status', {length : 255}).notNull(),
    output : jsonb('output'),
    input : jsonb('input'),
    error : jsonb('error'),
    executedAt : timestamp('executed_at'),
    duration_ms : varchar('duration_ms', {length : 50})
});