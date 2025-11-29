import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPhoto } from "react-icons/md";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import {
    Container,
    Title,
    Column,
    TitleCadastro,
    SubtitleCadastro,
    CriarText,
    Row,
    Wrapper,
    TxtLoginDiv
} from "./styles";

const Cadastro = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const handleRegister = async (values) => {
        try {
            const response = await api.get(
                `/users?email=${values.email}&senha=${values.senha}&nome=${values.nome}`
            );

            const user = response.data?.[0];

            if (user?.id) {
                navigate("/feed");
                return;
            }

            alert("Dados inválidos. Verifique e tente novamente.");
        } catch (error) {
            alert("Erro ao realizar cadastro. Tente novamente mais tarde.");
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column flex="1">
                    <Title>
                        A plataforma ideal para você aprender com especialistas, dominar as
                        tecnologias mais utilizadas e acelerar sua entrada no mercado.
                    </Title>
                </Column>

                <Column flex="4">
                    <Wrapper>
                        <TitleCadastro>Crie sua conta grátis</TitleCadastro>
                        <SubtitleCadastro>
                            Preencha seus dados e comece sua jornada.
                        </SubtitleCadastro>

                        <form onSubmit={handleSubmit(handleRegister)}>
                            <Input
                                placeholder="Nome Completo"
                                leftIcon={<MdPhoto />}
                                name="nome"
                                control={control}
                            />
                            {errors.nome && <span>Informe seu nome completo</span>}

                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                            />
                            {errors.email && <span>Informe um e-mail válido</span>}

                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                name="senha"
                                control={control}
                            />
                            {errors.senha && <span>A senha é obrigatória</span>}

                            <Button title="Registrar" v

