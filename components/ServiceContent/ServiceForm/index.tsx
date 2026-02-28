import {
    CaretRightIcon,
    WrenchIcon,
    ChatCenteredTextIcon,
    PhoneIcon,
    EnvelopeSimpleIcon,
    UserIcon,
    XIcon
} from "@phosphor-icons/react";
import { Modal } from "../../Modal";
import { handlePhoneChange } from "@/utils/phoneMask";

interface ServiceFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    servicoAtivo: any;
}

export function ServiceForm({ isOpen, setIsOpen, servicoAtivo }: ServiceFormProps) {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { nome, email, telefone, servico, mensagem } = Object.fromEntries(formData.entries());

        const iconUser = "👤";
        const iconMail = "📧";
        const iconPhone = "📱";
        const iconTool = "🛠️";
        const iconNote = "📝";

        const textoPuro = `Olá, Eletro System! Gostaria de solicitar um orçamento para um serviço.\n\n` +
            `*MEUS DADOS:*\n` +
            `${iconUser} *Nome:* ${nome}\n` +
            `${iconMail} *E-mail:* ${email}\n` +
            `${iconPhone} *Telefone:* ${telefone}\n\n` +
            `*DETALHES DO PEDIDO:*\n` +
            `${iconTool} *Serviço:* ${servico}\n` +
            `${iconNote} *Solicitação:* ${mensagem}`;

        const mensagemCodificada = encodeURIComponent(textoPuro);

        const phoneNumber = "5521989810973";
        const finalUrl = `https://wa.me/${phoneNumber}?text=${mensagemCodificada}`;

        window.open(finalUrl, '_blank');
    }

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} maxWidth="max-w-[500px]">
                <div className="relative bg-[#0d0d0d] text-white p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] scrollBar">

                    <div className="relative mb-8">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer absolute -top-2 -right-2 p-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <XIcon size={24} weight="bold" />
                        </button>

                        <h2 className="text-3xl font-black tracking-tighter uppercase italic">
                            Solicitar <span className="text-[#03A64A]">Orçamento</span>
                        </h2>
                        <p className="text-zinc-500 text-sm font-medium mt-1">
                            Preencha os dados técnicos para análise.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-4">

                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">Seu Nome Completo</label>
                                <div className="relative group">
                                    <UserIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        placeholder="Ex: John Doe"
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">E-mail de Contato</label>
                                <div className="relative group">
                                    <EnvelopeSimpleIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="telefone" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">Telefone / WhatsApp</label>
                                <div className="relative group">
                                    <PhoneIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        onInput={handlePhoneChange}
                                        maxLength={15}
                                        placeholder="(xx) xxxxx-xxxx"
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="servico" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">Serviço Selecionado</label>
                                <div className="relative group italic">
                                    <WrenchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#03A64A]" />
                                    <input
                                        type="text"
                                        id="servico"
                                        name="servico"
                                        value={servicoAtivo.titulo}
                                        readOnly
                                        className="w-full bg-white/5 border border-[#03A64A]/30 text-[#03A64A] rounded-2xl py-4 pl-12 pr-4 text-sm outline-none cursor-default font-bold"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="mensagem" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">Detalhamento da Solicitação</label>
                                <div className="relative group">
                                    <ChatCenteredTextIcon size={20} className="absolute left-4 top-4 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                    <textarea
                                        id="mensagem"
                                        rows={4}
                                        name="mensagem"
                                        placeholder="Descreva o problema ou o setup que deseja montar com o máximo de detalhes..."
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700 resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer group flex items-center gap-3 justify-center w-full mt-6 py-5 bg-[#03A64A] hover:bg-[#028a3d] text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_15px_30px_rgba(3,166,74,0.2)] active:scale-95"
                        >
                            Enviar Solicitação <CaretRightIcon size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}