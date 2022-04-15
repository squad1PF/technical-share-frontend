import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-br', ptBR)

import { UserData } from "../../interfaces/user";
import { ToScheduleContainer, ToSchedulePage } from "./styles";
import { MentorshipDataForm, NewMentorshipData } from "../../interfaces/mentorships";
import { createMentorship } from "../../services/mentorships";
import AuthContext from "../../contexts/auth";

type LocationState = {
    mentor: UserData;
}

const validationMentorshipData = yup.object().shape({
    subject: yup.string().required("O Assunto da Mentoria é um campo obrigatório"),
    start_date: yup.date().required("Horário de início obrigatório"),
    end_date: yup.date().required("Horário de fim obrigatório"),
})

const ToSchedule: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { mentor }: LocationState = location.state as LocationState;
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<MentorshipDataForm>({
        resolver: yupResolver(validationMentorshipData)
    });

    const addMentorship = (mentorshipData: MentorshipDataForm) => {
        const newMentorship: NewMentorshipData = {
            id_mentor: mentor.id,
            id_mentored: user?.id as string,
            subject: mentorshipData.subject,
            start_date: mentorshipData.start_date.toString(),
            end_date:mentorshipData.end_date.toString(),
        }

        createMentorship(newMentorship, (res) => {
            navigate("/find")
        })
    }

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <ToSchedulePage>
            <ToScheduleContainer>
                <h4>Marcar mentoria com</h4>
                <h1>{ mentor.name }</h1>

                <div id="form-container">
                    <form onSubmit={handleSubmit(addMentorship)}>
                        <label>Assunto</label>
                        <textarea id="subject" {...register("subject")} autoFocus />
                        <p>{errors.subject?.message}</p>

                        <DatePicker
                            locale="pt-br"
                            selected={startDate}
                            onChange={(date: Date) => {
                                setValue("start_date", date)
                                setStartDate(date)
                            }}
                            showTimeSelect
                            dateFormat="d/MM/yyyy - p"
                            placeholderText="Selecione o horário de início"
                        />
                        <p>{errors.start_date?.message}</p>

                        <DatePicker
                            locale="pt-br"
                            selected={endDate}
                            onChange={(date: Date) => {
                                setValue("end_date", date)
                                setEndDate(date)
                            }}
                            showTimeSelect
                            dateFormat="d/MM/yyyy - p"
                            placeholderText="Selecione o horário de término"
                        />
                        <p>{errors.end_date?.message}</p>

                        <button type="submit">Agendar</button>
                    </form>
                </div>
            </ToScheduleContainer>
        </ToSchedulePage>
    )
}

export default ToSchedule;