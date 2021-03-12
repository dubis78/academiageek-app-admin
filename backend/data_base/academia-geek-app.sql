-- ------------- SCHEMAS ---------------- --

DROP SCHEMA IF EXISTS auth, cv, main, adm, tt CASCADE;
CREATE SCHEMA auth;
CREATE SCHEMA cv;
CREATE SCHEMA main;
CREATE SCHEMA adm;
CREATE SCHEMA tt;

-- --------------- SEQUENCES ------------------- --

-- ----------------------------
-- Sequence structure for auth_assignment_permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_assignment_permissions_id_seq";
CREATE SEQUENCE "auth"."auth_assignment_permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_permissions_id_seq";
CREATE SEQUENCE "auth"."auth_permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_permissions_section_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_permissions_section_id_seq";
CREATE SEQUENCE "auth"."auth_permissions_section_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_roles_id_seq";
CREATE SEQUENCE "auth"."auth_roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_sections_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_sections_id_seq";
CREATE SEQUENCE "auth"."auth_sections_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_user_roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_user_roles_id_seq";
CREATE SEQUENCE "auth"."auth_user_roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_user_status_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_user_status_id_seq";
CREATE SEQUENCE "auth"."auth_user_status_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for auth_users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "auth"."auth_users_id_seq";
CREATE SEQUENCE "auth"."auth_users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cv_academic_info
-- ----------------------------
DROP SEQUENCE IF EXISTS "cv"."cv_academic_info_seq" CASCADE;
CREATE SEQUENCE "cv"."cv_academic_info_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cv_languages_info
-- ----------------------------
DROP SEQUENCE IF EXISTS "cv"."cv_languages_info_seq" CASCADE;
CREATE SEQUENCE "cv"."cv_languages_info_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cv_personal_info
-- ----------------------------
DROP SEQUENCE IF EXISTS "cv"."cv_personal_info_seq" CASCADE;
CREATE SEQUENCE "cv"."cv_personal_info_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cv_work_info
-- ----------------------------
DROP SEQUENCE IF EXISTS "cv"."cv_work_info_seq" CASCADE;
CREATE SEQUENCE "cv"."cv_work_info_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_city
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_city_seq" CASCADE;
CREATE SEQUENCE "main"."main_city_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_country
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_country_seq" CASCADE;
CREATE SEQUENCE "main"."main_country_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_files_manager
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_files_manager_seq" CASCADE;
CREATE SEQUENCE "main"."main_files_manager_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_interview_schedule
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_interview_schedule_seq" CASCADE;
CREATE SEQUENCE "main"."main_interview_schedule_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_languages
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_languages_seq" CASCADE;
CREATE SEQUENCE "main"."main_languages_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for main_state
-- ----------------------------
DROP SEQUENCE IF EXISTS "main"."main_state_seq" CASCADE;
CREATE SEQUENCE "main"."main_state_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tt_tests_students_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_tests_students_seq";
CREATE SEQUENCE "tt"."tt_tests_students_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tt_tests_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_tests_seq";
CREATE SEQUENCE "tt"."tt_tests_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_difficulties_tests_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_difficulties_tests_seq";
CREATE SEQUENCE "tt"."tt_difficulties_tests_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_answers_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_answers_seq";
CREATE SEQUENCE "tt"."tt_answers_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_bancks_questions_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_bancks_questions_seq";
CREATE SEQUENCE "tt"."tt_bancks_questions_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_difficulties_questions_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_difficulties_questions_seq";
CREATE SEQUENCE "tt"."tt_difficulties_questions_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_options_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_options_seq";
CREATE SEQUENCE "tt"."tt_options_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;


-- ----------------------------
-- Sequence structure for tt_topics_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "tt"."tt_topics_seq";
CREATE SEQUENCE "tt"."tt_topics_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- --------------- SEQUENCES ------------------- --


-- --------------- ENUMS TYPES--------------------- --

-- ----------------------------
-- Enum Type for cv_academic_info
-- ----------------------------
DROP TYPE IF EXISTS "cv"."enum_program_type";
CREATE TYPE "cv"."enum_program_type" AS ENUM ('Básica Secundaria', 'Técnico', 'Tecnólogo', 'Pregrado', 'Posgrado', 'Curso', 'Seminario', 'Diplomado', 'Otro');

-- ----------------------------
-- Enum Type for cv_languages_info
-- ----------------------------
DROP TYPE IF EXISTS "cv"."enum_language_skills";
CREATE TYPE "cv"."enum_language_skills" AS ENUM ('Básico', 'Intermedio', 'Avanzado');

-- ----------------------------
-- Enum Type for cv_personal_info
-- ----------------------------
DROP TYPE IF EXISTS "cv"."enum_document_type";
CREATE TYPE "cv"."enum_document_type" AS ENUM ('CC', 'TI', 'CE', 'PA', 'Otro');

DROP TYPE IF EXISTS "cv"."enum_gender";
CREATE TYPE "cv"."enum_gender" AS ENUM ('Masculino', 'Femenino', 'Otro');

DROP TYPE IF EXISTS "cv"."enum_scolarity";
CREATE TYPE "cv"."enum_scolarity" AS ENUM ('Bachiller', 'Técnico', 'Tecnólogo', 'Profesional', 'Especialista', 'Maestría', 'Doctorado', 'Otro');

DROP TYPE IF EXISTS "cv"."enum_disability";
CREATE TYPE "cv"."enum_disability" AS ENUM ('Ninguna', 'Movilidad', 'Auditiva o hipoacusia', 'Visual', 'Cognitiva', 'Afectaciones psicosociales');

DROP TYPE IF EXISTS "cv"."enum_population_type";
CREATE TYPE "cv"."enum_population_type" AS ENUM ('Indígena', 'Afrodescendiente', 'LGBT+', 'Desplazado', 'Mujer cabeza de hogar', 'Migrante no regularizado', 'Migrante regularizado', 'Colombiano retornado', 'Otro');

DROP TYPE IF EXISTS "cv"."enum_socioeconomic_status";
CREATE TYPE "cv"."enum_socioeconomic_status" AS ENUM ('1', '2', '3', '4', '5', '6');

-- ----------------------------
-- Enum Type for cv_work_info
-- ----------------------------
DROP TYPE IF EXISTS "cv"."enum_vinculation_status";
CREATE TYPE "cv"."enum_vinculation_status" AS ENUM ('Vinculado', 'Culminado');


-- ----------------------------
-- Enum Type for main_interview_schedule
-- ----------------------------
DROP TYPE IF EXISTS "main"."enum_interview_type";
CREATE TYPE "main"."enum_interview_type" AS ENUM ('Entrevista', 'Reunión', 'Revisión', 'Retroalimentación');

DROP TYPE IF EXISTS "main"."enum_result_status";
CREATE TYPE "main"."enum_result_status" AS ENUM ('Aprobado', 'Pendiente', 'No Aprobado');

-- ----------------------------
-- Enum Type for main_stage
-- ----------------------------
DROP TYPE IF EXISTS "main"."enum_stage_process";
CREATE TYPE "main"."enum_stage_process" AS ENUM ('Registro o enrolamiento', 'Perfilación o postulación', 'En proceso (Requerimientos)', 'En Prueba', 'En Entrevista', 'Becario', 'No Aceptado', 'Egresado', 'Asistente', 'En Deserción', 'No Completado');

-- --------------------
-- ----------------------------
-- Enum Type for cv_languages_info
-- ----------------------------
DROP TYPE IF EXISTS "cv"."enum_language_skills";
CREATE TYPE "cv"."enum_language_skills" AS ENUM ('Básico', 'Intermedio', 'Avanzado');


-- --------------------
-- ----------------------------
-- Enum Type for adm
-- ----------------------------

DROP TYPE IF EXISTS "adm"."evidence_type_requeriment";
CREATE TYPE "adm"."evidence_type_requeriment" AS ENUM ('URL','File','Ambos');

DROP TYPE IF EXISTS "adm"."prospects_preference_state";
CREATE TYPE "adm"."prospects_preference_state" AS ENUM ('aprobado','reprobado','en revision');

DROP TYPE IF EXISTS "adm"."status";
CREATE TYPE "adm"."status" AS ENUM ('activo','inactivo');

-- ----------------------------
-- Enum Type for tt_tests_students
-- ----------------------------
DROP TYPE IF EXISTS "tt"."enum_state_test";
CREATE TYPE "tt"."enum_state_test" AS ENUM ('Asignada', 'En curso', 'Aprobada', 'Reprobada');

-- --------------- ENUMS TYPES--------------------- --


-- --------------- TABLES --------------------- --

-- ----------------------------
-- Table structure for auth_assignment_permissions
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_assignment_permissions";
CREATE TABLE "auth"."auth_assignment_permissions" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_assignment_permissions_id_seq'::regclass),
  "id_user" int4,
  "id_rol" int4,
  "id_permission" int4,
  "id_section" int4,
  "p_create" int4 DEFAULT 0,
  "p_read" int4 DEFAULT 0,
  "p_update" int4 DEFAULT 0,
  "p_remove" int4 DEFAULT 0
)
;

-- ----------------------------
-- Table structure for auth_permissions
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_permissions";
CREATE TABLE "auth"."auth_permissions" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_permissions_id_seq'::regclass),
  "permission_name" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for auth_permissions_section
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_permissions_section";
CREATE TABLE "auth"."auth_permissions_section" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_permissions_section_id_seq'::regclass),
  "id_permission" int4,
  "id_section" int4
)
;

-- ----------------------------
-- Table structure for auth_roles
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_roles";
CREATE TABLE "auth"."auth_roles" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_roles_id_seq'::regclass),
  "role_name" varchar(255) COLLATE "pg_catalog"."default",
  "parent" int4 DEFAULT 0
)
;

-- ----------------------------
-- Table structure for auth_sections
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_sections";
CREATE TABLE "auth"."auth_sections" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_sections_id_seq'::regclass),
  "section_name" varchar(255) COLLATE "pg_catalog"."default",
  "section_parent" int4 DEFAULT 0,
  "section_link" varchar(255) COLLATE "pg_catalog"."default",
  "section_order" int4,
  "isadmin" bool DEFAULT false,
  "isprivate" bool DEFAULT false
)
;
COMMENT ON COLUMN "auth"."auth_sections"."isadmin" IS 'Estas secciones solo se le van a cargar a los usuarios que tienen que en auth_user en su campo admin 1';
COMMENT ON COLUMN "auth"."auth_sections"."isprivate" IS 'Estas secciones no se cargan en el menu, hacen parte de secciones que son internas de cada funcionalida. Deben ser asignadas a los usuarios, pero no se cargan en el menu principal. ';

-- ----------------------------
-- Table structure for auth_session
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_session";
CREATE TABLE "auth"."auth_session" (
  "sid" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
;

-- ----------------------------
-- Table structure for auth_user_roles
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_user_roles";
CREATE TABLE "auth"."auth_user_roles" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_user_roles_id_seq'::regclass),
  "id_user" int4,
  "id_role" int4
)
;

-- ----------------------------
-- Table structure for auth_user_status
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_user_status";
CREATE TABLE "auth"."auth_user_status" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_user_status_id_seq'::regclass),
  "user_status" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for auth_users
-- ----------------------------
DROP TABLE IF EXISTS "auth"."auth_users";
CREATE TABLE "auth"."auth_users" (
  "id" int4 NOT NULL DEFAULT nextval('auth.auth_users_id_seq'::regclass),
  "full_name" varchar(255) COLLATE "pg_catalog"."default",
  "last_name" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "pass" varchar(255) COLLATE "pg_catalog"."default",
  "register_time" int4,
  "last_entry" int4,
  "status" int4 DEFAULT 1,
  "admin" int4 DEFAULT 0,
  "parent_id" int4 DEFAULT 0,
  "upgrade_time" int4,
  "mobile_phone" varchar(30)
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "auth"."auth_assignment_permissions_id_seq"
OWNED BY "auth"."auth_assignment_permissions"."id";
SELECT setval('"auth"."auth_assignment_permissions_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_permissions_id_seq"
OWNED BY "auth"."auth_permissions"."id";
SELECT setval('"auth"."auth_permissions_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_permissions_section_id_seq"
OWNED BY "auth"."auth_permissions_section"."id";
SELECT setval('"auth"."auth_permissions_section_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_roles_id_seq"
OWNED BY "auth"."auth_roles"."id";
SELECT setval('"auth"."auth_roles_id_seq"', 4, true);
ALTER SEQUENCE "auth"."auth_sections_id_seq"
OWNED BY "auth"."auth_sections"."id";
SELECT setval('"auth"."auth_sections_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_user_roles_id_seq"
OWNED BY "auth"."auth_user_roles"."id";
SELECT setval('"auth"."auth_user_roles_id_seq"', 2, false);
ALTER SEQUENCE "auth"."auth_user_status_id_seq"
OWNED BY "auth"."auth_user_status"."id";
SELECT setval('"auth"."auth_user_status_id_seq"', 6, true);
ALTER SEQUENCE "auth"."auth_users_id_seq"
OWNED BY "auth"."auth_users"."id";
SELECT setval('"auth"."auth_users_id_seq"', 59, true);

-- ----------------------------
-- Uniques structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "qu_role_seccion" UNIQUE ("id_rol", "id_section");
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "qu_role_permission" UNIQUE ("id_rol", "id_permission");

-- ----------------------------
-- Primary Key structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "auth_assignment_permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_permissions" ADD CONSTRAINT "auth_permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_permissions_section
-- ----------------------------
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_roles
-- ----------------------------
ALTER TABLE "auth"."auth_roles" ADD CONSTRAINT "auth_roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table auth_sections
-- ----------------------------
ALTER TABLE "auth"."auth_sections" ADD CONSTRAINT "uq_link_seccion" UNIQUE ("section_link");

-- ----------------------------
-- Primary Key structure for table auth_sections
-- ----------------------------
ALTER TABLE "auth"."auth_sections" ADD CONSTRAINT "auth_sections_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table auth_session
-- ----------------------------
CREATE INDEX "IDX_session_expire" ON "auth"."auth_session" USING btree (
  "expire" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table auth_session
-- ----------------------------
ALTER TABLE "auth"."auth_session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid");

-- ----------------------------
-- Primary Key structure for table auth_user_roles
-- ----------------------------
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "auth_user_roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table auth_user_status
-- ----------------------------
ALTER TABLE "auth"."auth_user_status" ADD CONSTRAINT "auth_user_status_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "uq_email_auth_user" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "auth_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table auth_assignment_permissions
-- ----------------------------
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_permission" FOREIGN KEY ("id_permission") REFERENCES "auth"."auth_permissions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_rol" FOREIGN KEY ("id_rol") REFERENCES "auth"."auth_roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_section" FOREIGN KEY ("id_section") REFERENCES "auth"."auth_sections" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "auth"."auth_assignment_permissions" ADD CONSTRAINT "fk_id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table auth_permissions_section
-- ----------------------------
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_id_permission_fkey" FOREIGN KEY ("id_permission") REFERENCES "auth"."auth_permissions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "auth"."auth_permissions_section" ADD CONSTRAINT "auth_permissions_section_id_section_fkey" FOREIGN KEY ("id_section") REFERENCES "auth"."auth_sections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table auth_user_roles
-- ----------------------------
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "fk_aut_rol_id_rol" FOREIGN KEY ("id_role") REFERENCES "auth"."auth_roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "auth"."auth_user_roles" ADD CONSTRAINT "fk_aut_rol_id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table auth_users
-- ----------------------------
ALTER TABLE "auth"."auth_users" ADD CONSTRAINT "fk_status" FOREIGN KEY ("status") REFERENCES "auth"."auth_user_status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Table structure for main_country
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_country" CASCADE;
CREATE TABLE "main"."main_country" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_country_seq'::regclass),
  "country_name" varchar(100),
  "priority" int4,
  "cod_phone" varchar(20),
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for main_state
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_state" CASCADE;
CREATE TABLE "main"."main_state" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_state_seq'::regclass),
  "state_name" varchar(100),
  "id_country" int4,
  "priority" int4,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for main_city
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_city" CASCADE;
CREATE TABLE "main"."main_city" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_city_seq'::regclass),
  "city_name" varchar(100),
  "id_state" int4,
  "priority" int4,
  PRIMARY KEY ("id")
);


-- ----------------------------
-- Table structure for main_files_manager
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_files_manager" CASCADE;
CREATE TABLE "main"."main_files_manager" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_files_manager_seq'::regclass),
  "id_auth_user" int4,
  "file" text,
  "assigned" bool,
  "creation_date" timestamp NULL DEFAULT current_timestamp,
  "uq_file" text,
  PRIMARY KEY ("id")
);


-- ----------------------------
-- Table structure for main_languages
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_languages" CASCADE;
CREATE TABLE "main"."main_languages" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_languages_seq'::regclass),
  "language_name" varchar(20) NOT NULL,
  "priority" int4 NOT NULL,
  PRIMARY KEY ("id")
);


-- ----------------------------
-- Table structure for cv_personal_info
-- ----------------------------
DROP TABLE IF EXISTS "cv"."cv_personal_info" CASCADE;
CREATE TABLE "cv"."cv_personal_info" (
  "id" int4 NOT NULL DEFAULT nextval('cv.cv_personal_info_seq'::regclass),
  "id_user" int4 NOT NULL,
  "id_status" int4 NOT NULL,
  "document_type" cv.enum_document_type,
  "document" varchar(20) UNIQUE NOT NULL ,
  "gender" cv.enum_gender,
  "birth_date" date,
  "id_birth_country" int4 NOT NULL,
  "id_birth_city" int4 NOT NULL,
  "address" varchar(100),
  "socioeconomic_status" cv.enum_socioeconomic_status,
  "citizenship" varchar(20),
  "scolarity" cv.enum_scolarity,
  "disability" cv.enum_disability,
  "population_type" cv.enum_population_type,
  "residence_phone" varchar(20),
  "facebook_url" text,
  "twitter_url" text,
  "linkedin_url" text,
  "github_url" text,
  "id_photo" int4 NOT NULL,
  "id_cv_file" int4 NOT NULL,
  "registration_date" timestamp NULL DEFAULT current_timestamp,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for main_interview_schedule
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_interview_schedule" CASCADE;
CREATE TABLE "main"."main_interview_schedule" (
  "id" int4 NOT NULL DEFAULT nextval('main.main_interview_schedule_seq'::regclass),
  "id_cv_user" int4,
  "id_incharge" int4,
  "interview_type" main.enum_interview_type,
  "interview_date" timestamp NOT NULL,
  "result_status" main.enum_result_status,
  "comments" text,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for main_stage
-- ----------------------------
DROP TABLE IF EXISTS "main"."main_stage" CASCADE;
CREATE TABLE "main"."main_stage"(
	"id" SERIAL,
	"stage_name" VARCHAR(100) NOT NULL,
  "stage_process" main.enum_stage_process,
	PRIMARY KEY(id)
);


-- ----------------------------
-- Table structure for cv_academic_info
-- ----------------------------
DROP TABLE IF EXISTS "cv"."cv_academic_info" CASCADE;
CREATE TABLE "cv"."cv_academic_info" (
  "id" int4 NOT NULL DEFAULT nextval('cv.cv_academic_info_seq'::regclass),
  "id_cv_user" int4 NOT NULL,
  "program_name" varchar(255) NOT NULL,
  "program_type" cv.enum_program_type,
  "inst_name" varchar(255) NOT NULL,
  "id_inst_country" int4 NOT NULL,
  "id_inst_city" int4 NOT NULL,
  "start_date" date NOT NULL,
  "finish_date" date,
  "program_duration" int4,
  "intensity_hour" int4,
  "pp_completed" int4,
  "pp_total" int4,
  "id_acad_certf" int4 NOT NULL,
  PRIMARY KEY ("id")
);


-- ----------------------------
-- Table structure for cv_languages_info
-- ----------------------------
DROP TABLE IF EXISTS "cv"."cv_languages_info" CASCADE;
CREATE TABLE "cv"."cv_languages_info" (
  "id" int4 NOT NULL DEFAULT nextval('cv.cv_languages_info_seq'::regclass),
  "id_cv_user" int4 NOT NULL,
  "id_language" int4 NOT NULL,
  "reading" cv.enum_language_skills,
  "writing" cv.enum_language_skills,
  "speaking" cv.enum_language_skills,
  "id_lang_certf" int4 NOT NULL,
  PRIMARY KEY ("id")
);


-- ----------------------------
-- Table structure for cv_work_info
-- ----------------------------
DROP TABLE IF EXISTS "cv"."cv_work_info" CASCADE;
CREATE TABLE "cv"."cv_work_info" (
  "id" int4 NOT NULL DEFAULT nextval('cv.cv_work_info_seq'::regclass),
  "id_cv_user" int4 NOT NULL,
  "company_name" varchar(255) NOT NULL,
  "company_url" text,
  "id_company_city" int4 NOT NULL,
  "position" varchar(255) NOT NULL,
  "start_date" date NOT NULL,
  "finish_date" date,
  "id_work_certf" int4 NOT NULL,
  "vinculation_status" cv.enum_vinculation_status,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Table structure for adm schema
-- ----------------------------
DROP TABLE IF EXISTS "adm"."adm_partners" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_course_partners" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_course_cohort" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_student_cohort" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_prospect_stages" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_courses" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_courses_requeriments" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_detailed_requeriment" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_requeriment_fullfiment" CASCADE;
DROP TABLE IF EXISTS "adm"."adm_prospects_preference" CASCADE;

CREATE TABLE "adm"."adm_partners"(
	"id" SERIAL,
	"partner_name" varchar(100) NOT NULL,
  "contact_name" varchar(100) NOT NULL,
	"contact_phone" varchar(100) NOT NULL,
	"contact_email" varchar(100) NOT NULL,
  "partnership_date" date NOT NULL,
	"status" "adm"."status" NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE "adm"."adm_course_partners"(
	"id_partners" INT NOT NULL UNIQUE,
	"id_course_user_cohort" INT NOT NULL UNIQUE
);


CREATE TABLE "adm"."adm_course_cohort"(
	"id" SERIAL,
	"id_course" INT,
	"cohort_name" varchar(100) NOT NULL,
	"start_date" date NOT NULL,
	"desc" varchar(100) NOT NULL,
	"max_members" INT NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_student_cohort"(
	"id" SERIAL,
	"id_prospect_student" INT NOT NULL,
	"id_cohort" INT NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_prospect_stages"(
	"id" SERIAL,
	"id_prospect_preference" INT NOT NULL UNIQUE,
	"id_stage" INT NOT NULL UNIQUE,
	"start_date" date NOT NULL,
	"achievement_date" date NOT NULL,
	PRIMARY KEY(id)
);


CREATE TABLE "adm"."adm_courses"(
	"id" SERIAL,
	"course_name" VARCHAR(100) NOT NULL,
	"course_desc" VARCHAR(100) NOT NULL,
	"url_info" VARCHAR(100) NOT NULL,
	"exit_profile" VARCHAR(100) NOT NULL,
	"start_date" date NOT NULL,
	"status" "adm"."status" NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_courses_requeriments"(
	"id" SERIAL,
	"id_course" INT NOT NULL,
	"concept " VARCHAR(100) NOT NULL,
	"description" VARCHAR(100) NOT NULL,
	"register_date" date NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_detailed_requeriment"(
	"id" SERIAL,
	"id_courses_requeriments" INT NOT NULL,
	"requeriment_name " VARCHAR(100) NOT NULL,
	"URL_source" VARCHAR(100) NOT NULL,
	"evidence_type " "adm"."evidence_type_requeriment" NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_requeriment_fullfiment"(
	"id" SERIAL,
	"id_prospect" INT NOT NULL,
	"id_detailed_req" INT NOT NULL,
	"url_validation " VARCHAR(100) NOT NULL,
	"id_file_validation" int4 NOT NULL,
	"upload_date " date NOT NULL,
	PRIMARY KEY(id)
);



CREATE TABLE "adm"."adm_prospects_preference"(
	"id" SERIAL,
	"id_course" INT NOT NULL,
	"id_cv_user" INT NOT NULL,
	"regis_date " date NOT NULL,
	"state" "adm"."prospects_preference_state" NOT NULL,
	PRIMARY KEY(id)
);

-- ----------------------------
-- Table structure for tt_tests_students
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_tests_students" CASCADE;
CREATE TABLE "tt"."tt_tests_students" (
  "id_test_students" int4 NOT NULL DEFAULT nextval('tt.tt_tests_students_seq'::regclass),
  "id_test" int4,
  "id_prospect_preferent" int4,
  "id_aut_user" int4,
  "date_start" timestamp,
  "date_end" timestamp,
  "date_send" timestamp,
  "final_score" int4 ,
  "state_test" tt.enum_state_test
)
;


-- ----------------------------
-- Table structure for tt_tests
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_tests" CASCADE;
CREATE TABLE "tt"."tt_tests" (
  "id_test" int4 NOT NULL DEFAULT nextval('tt.tt_tests_seq'::regclass),
  "id_topic_test" int4,
  "name_test" varchar(50),
  "description_test" text,
  "time_duration" varchar(20),
  "date_start" timestamp,
  "date_end" timestamp,
  "password_test" varchar(10),
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;


-- ----------------------------
-- Table structure for tt_difficulties_tests
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_difficulties_tests" CASCADE;
CREATE TABLE "tt"."tt_difficulties_tests" (
  "id_difficulty_test" int4 NOT NULL DEFAULT nextval('tt.tt_difficulties_tests_seq'::regclass),
  "id_difficulty" int4,
  "id_test" int4,
  "number_questions" int4,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
);


-- ----------------------------
-- Table structure for tt_answers
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_answers" CASCADE;
CREATE TABLE "tt"."tt_answers" (
  "id_answer" int4 NOT NULL DEFAULT nextval('tt.tt_answers_seq'::regclass),
  "id_option" int4,
  "id_test_person" int4,
  "date_registration" timestamp NULL DEFAULT current_timestamp
)
;


-- ----------------------------
-- Table structure for tt_bancks_questions
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_bancks_questions" CASCADE;
CREATE TABLE "tt"."tt_bancks_questions" (
  "id_question" int4 NOT NULL DEFAULT nextval('tt.tt_bancks_questions_seq'::regclass),
  "id_difficulty" int4,
  "id_topic_question" int4,
  "id_img_question" int4,
  "description_question" text,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;


-- ----------------------------
-- Table structure for tt_difficulties_questions
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_difficulties_questions" CASCADE;
CREATE TABLE "tt"."tt_difficulties_questions" (
  "id_difficulty" int4 NOT NULL DEFAULT nextval('tt.tt_difficulties_questions_seq'::regclass),
  "name_category" varchar(50),
  "points_question" int4,
  "date_creation" timestamp NULL DEFAULT current_timestamp
)
;


-- ----------------------------
-- Table structure for tt_options
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_options" CASCADE;
CREATE TABLE "tt"."tt_options" (
  "id_option" int4 NOT NULL DEFAULT nextval('tt.tt_options_seq'::regclass),
  "id_question" int4,
  "id_img_option" int4,
  "description_option" text,
  "answer_option" json,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;

-- ----------------------------
-- Table structure for tt_topics
-- ----------------------------
DROP TABLE IF EXISTS "tt"."tt_topics" CASCADE;
CREATE TABLE "tt"."tt_topics" (
  "id_topic" int4 NOT NULL DEFAULT nextval('tt.tt_topics_seq'::regclass),
  "name_topic" varchar(50),
  "description_topic" text,
  "date_creation" timestamp NULL DEFAULT current_timestamp,
  "date_update" timestamp NULL DEFAULT NULL
)
;

-- --------------- TABLES --------------------- --

-- --------------- PRIMARY KEY ---------------------

-- ----------------------------
-- Primary Key structure for table tt_tests_students
-- ----------------------------
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "tt_test_students_pkey" PRIMARY KEY ("id_test_students");

-- ----------------------------
-- Primary Key structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "tt_tests_pkey" PRIMARY KEY ("id_test");

-- ----------------------------
-- Primary Key structure for table tt_difficulties
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "tt_difficulties_tests_pkey" PRIMARY KEY ("id_difficulty_test");

-- ----------------------------
-- Primary Key structure for table tt_answers
-- ----------------------------
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "tt_answers_pkey" PRIMARY KEY ("id_answer");

-- ----------------------------
-- Primary Key structure for table tt_bancks_questions
-- ----------------------------
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "tt_bancks_questions_pkey" PRIMARY KEY ("id_question");

-- ----------------------------
-- Primary Key structure for table tt_difficulties_questions
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_questions" ADD CONSTRAINT "tt_difficulties_questions_pkey" PRIMARY KEY ("id_difficulty");

-- ----------------------------
-- Primary Key structure for table tt_options
-- ----------------------------
ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "tt_options_pkey" PRIMARY KEY ("id_option");

-- ----------------------------
-- Primary Key structure for table tt_topics
-- ----------------------------
ALTER TABLE "tt"."tt_topics" ADD CONSTRAINT "tt_topics_pkey" PRIMARY KEY ("id_topic");


-- --------------- PRIMARY KEY ---------------------



-- --------------- UNIQUES ----------------- --

-- ----------------------------
-- Uniques structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "uq_password_test" UNIQUE ("password_test");

-- --------------- UNIQUES ----------------- --


-- --------------- FOREIGN KEYS ------------------- --

-- ----------------------------
-- Foreign Keys structure for table cv_academic_info
-- ----------------------------
ALTER TABLE "cv"."cv_academic_info" ADD CONSTRAINT "id_cv_user" FOREIGN KEY ("id_cv_user") REFERENCES "cv"."cv_personal_info" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_academic_info" ADD CONSTRAINT "id_inst_country" FOREIGN KEY ("id_inst_country") REFERENCES "main"."main_country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE"cv"."cv_academic_info" ADD CONSTRAINT "id_inst_city" FOREIGN KEY ("id_inst_city") REFERENCES "main"."main_city" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_academic_info" ADD CONSTRAINT "id_acad_certf" FOREIGN KEY ("id_acad_certf") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table cv_languages_info
-- ----------------------------
ALTER TABLE "cv"."cv_languages_info" ADD CONSTRAINT "id_language" FOREIGN KEY ("id_language") REFERENCES "main"."main_languages" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_languages_info" ADD CONSTRAINT "id_cv_user" FOREIGN KEY ("id_cv_user") REFERENCES "cv"."cv_personal_info" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_languages_info" ADD CONSTRAINT "id_lang_certf" FOREIGN KEY ("id_lang_certf") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table cv_personal_info
-- ----------------------------
-- ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_birth_country" FOREIGN KEY ("id_birth_country") REFERENCES "main"."main_country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_birth_city" FOREIGN KEY ("id_birth_city") REFERENCES "main"."main_city" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_photo" FOREIGN KEY ("id_photo") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_cv_file" FOREIGN KEY ("id_cv_file") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_user" FOREIGN KEY ("id_user") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
--ALTER TABLE "cv"."cv_personal_info" ADD CONSTRAINT "id_status" FOREIGN KEY ("id_status");

-- ----------------------------
-- Foreign Keys structure for table cv_work_info
-- ----------------------------
ALTER TABLE "cv"."cv_work_info" ADD CONSTRAINT "id_cv_user" FOREIGN KEY ("id_cv_user") REFERENCES "cv"."cv_personal_info" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_work_info" ADD CONSTRAINT "id_company_city" FOREIGN KEY ("id_company_city") REFERENCES "main"."main_city" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "cv"."cv_work_info" ADD CONSTRAINT "id_work_certf" FOREIGN KEY ("id_work_certf") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table main_files_manager
-- ----------------------------
ALTER TABLE "main"."main_files_manager" ADD CONSTRAINT "id_auth_user" FOREIGN KEY ("id_auth_user") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table main_interview_schedule
-- ----------------------------
ALTER TABLE "main"."main_interview_schedule" ADD CONSTRAINT "id_incharge" FOREIGN KEY ("id_incharge") REFERENCES "auth"."auth_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table main_state
-- ----------------------------
ALTER TABLE "main"."main_state" ADD CONSTRAINT "id_country" FOREIGN KEY ("id_country") REFERENCES "main"."main_country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table main_city
-- ----------------------------
ALTER TABLE "main"."main_city" ADD CONSTRAINT "id_state" FOREIGN KEY ("id_state") REFERENCES "main"."main_state" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for adm schema tables
-- ----------------------------
-- relaciones de la tabla course_partners con course_cohort y adm_partners

ALTER TABLE "adm"."adm_course_partners"	ADD CONSTRAINT fk_id_partners
   FOREIGN KEY(id_partners) 
      REFERENCES "adm"."adm_partners"(id),
			
	ADD CONSTRAINT fk_id_course_user_cohort
   FOREIGN KEY(id_course_user_cohort) 
      REFERENCES "adm"."adm_course_cohort"(id);
			
-- relacion de la tabla adm_course_cohort con adm_courses			
			
ALTER TABLE "adm"."adm_course_cohort"		
		ADD CONSTRAINT fk_id_course
			FOREIGN KEY(id_course) 
			REFERENCES "adm"."adm_courses"(id);
			
-- relacion de l tabla adm_student_cohort co adm_prospect_stages y adm_course_cohort
		
ALTER TABLE "adm"."adm_student_cohort"		
		ADD CONSTRAINT fk_id_prospect_student
			FOREIGN KEY(id_prospect_student) 
			REFERENCES "adm"."adm_prospects_preference"(id),
			
			ADD CONSTRAINT fk_id_cohort
			FOREIGN KEY(id_cohort) 
			REFERENCES "adm"."adm_course_cohort"(id);
			
-- relacion de la tabla aadm_prospect_stages con adm_prospects_preference  y adm_stage
			
ALTER TABLE "adm"."adm_prospect_stages"		
		ADD CONSTRAINT fk_id_prospect_preference
			FOREIGN KEY(id_prospect_preference) 
			REFERENCES "adm"."adm_prospects_preference"(id),
			
			ADD CONSTRAINT fk_id_stage
			FOREIGN KEY(id_stage) 
			REFERENCES "main"."main_stage"(id);
			
-- relacion de la tabla adm_prospect_stages con adm_courses
			
ALTER TABLE "adm"."adm_prospects_preference" ADD CONSTRAINT fk_id_course FOREIGN KEY(id_course) REFERENCES "adm"."adm_courses"(id);
			
			-- llave foranea para relacionar con el modulo azul
ALTER TABLE "adm"."adm_prospects_preference" ADD CONSTRAINT fk_id_cv_user FOREIGN KEY(id_cv_user) REFERENCES "cv"."cv_personal_info"(id);
			
			-- relacion de la tabla adm_courses_requeriments co adm_courses
			
ALTER TABLE "adm"."adm_courses_requeriments" ADD CONSTRAINT "fk_id_course" FOREIGN KEY("id_course")	REFERENCES "adm"."adm_courses"(id);

-- relacion de la tabla adm-adm_detailed_requeriment cmo adm_courses_requeriments

ALTER TABLE "adm"."adm_detailed_requeriment"
		ADD CONSTRAINT fk_id_courses_requeriments
			FOREIGN KEY(id_courses_requeriments) 
			REFERENCES "adm"."adm_courses_requeriments"(id);
			
			
	-- relaciones de la tabla adm_requeriment_fullfiment con adm_prospects_preference y adm_detailed_requeriment
			
	ALTER TABLE "adm"."adm_requeriment_fullfiment"		
		ADD CONSTRAINT fk_id_prospect
			FOREIGN KEY(id_prospect) 
			REFERENCES "adm"."adm_prospects_preference"(id),
			
			ADD CONSTRAINT fk_id_detailed_req
			FOREIGN KEY(id_detailed_req) 
			REFERENCES "adm"."adm_detailed_requeriment"(id),
			
			-- llave foranea para relacionar con el modulo morado
			ADD CONSTRAINT fk_id_file_validation
			FOREIGN KEY(id_file_validation) 
			REFERENCES "main"."main_files_manager"(id);


-- ----------------------------
-- Foreign Keys structure for table tt_tests
-- ----------------------------
ALTER TABLE "tt"."tt_tests" ADD CONSTRAINT "tt_tests_fkey" FOREIGN KEY ("id_topic_test") REFERENCES "tt"."tt_topics" ("id_topic") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_bancks_questions
-- ----------------------------
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_difficulty_fkey" FOREIGN KEY ("id_difficulty") REFERENCES "tt"."tt_difficulties_questions" ("id_difficulty") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_topic_question_fkey" FOREIGN KEY ("id_topic_question") REFERENCES "tt"."tt_topics" ("id_topic") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "tt"."tt_bancks_questions" ADD CONSTRAINT "id_img_question_fkey" FOREIGN KEY ("id_img_question") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_difficulties_tests
-- ----------------------------
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "id_difficulty_fkey" FOREIGN KEY ("id_difficulty") REFERENCES "tt"."tt_difficulties_questions" ("id_difficulty") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_difficulties_tests" ADD CONSTRAINT "id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "tt"."tt_tests" ("id_test") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_answers
-- ----------------------------
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "id_option_fkey" FOREIGN KEY ("id_option") REFERENCES "tt"."tt_options" ("id_option") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "tt"."tt_answers" ADD CONSTRAINT "id_test_person_fkey" FOREIGN KEY ("id_test_person") REFERENCES "tt"."tt_tests_students" ("id_test_students") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_options
-- ----------------------------
ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "tt"."tt_bancks_questions" ("id_question") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "tt"."tt_options" ADD CONSTRAINT "id_img_option_fkey" FOREIGN KEY ("id_img_option") REFERENCES "main"."main_files_manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- ----------------------------
-- Foreign Keys structure for table tt_tests_students
-- ----------------------------
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "id_test_fkey" FOREIGN KEY ("id_test") REFERENCES "tt"."tt_tests" ("id_test") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "id_prospect_preferent_fkey" FOREIGN KEY ("id_prospect_preferent") REFERENCES "adm"."adm_prospects_preference" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "tt"."tt_tests_students" ADD CONSTRAINT "id_aut_user_fkey" FOREIGN KEY ("id_aut_user") REFERENCES "auth"."auth_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- --------------- FOREIGN KEYS ------------------- --