'use client';

import { useActionState, useRef } from "react";
import { Modal } from "../../Modal";
import { XIcon, PhoneIcon, LockKeyIcon, SignInIcon, WarningCircleIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { signInAction } from "@/actions/signActions";
import { handlePhoneChange } from "@/utils/phoneMask";
import { useUIStore } from "@/stores/useUIStore";
import { Loading } from "@/components/Loading";
import { useUserStore } from "@/stores/useUserStore";
import { motion, AnimatePresence } from "framer-motion";

export function LoginFormModal() {
    const { loginModalOpen, closeLoginModal } = useUIStore();
    const { refreshUser } = useUserStore();

    const formRef = useRef<HTMLFormElement>(null);

    const [formState, formAction, pending] = useActionState(handleSignIn, { success: false, message: '' });

    async function handleSignIn(prevState: any, formData: FormData) {
        const result = await signInAction(prevState, formData);
        if (result.success) {
            closeLoginModal();
            formRef.current?.reset();
            refreshUser();
        }
        return result;
    }

    return (
        <Modal isOpen={loginModalOpen} setIsOpen={closeLoginModal} maxWidth="max-w-[450px]">
            <div className="relative bg-[#0d0d0d] text-white p-8 md:p-10 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">

                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#03A64A]/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10 mb-10 text-center">
                    <button
                        onClick={closeLoginModal}
                        className="cursor-pointer absolute -top-4 -right-4 p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <XIcon size={24} weight="bold" />
                    </button>

                    <div className="w-16 h-16 bg-[#03A64A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#03A64A]/20">
                        <SignInIcon size={32} weight="duotone" className="text-[#03A64A]" />
                    </div>

                    <h2 className="text-3xl font-black tracking-tighter leading-tight">
                        Acesso ao <br />
                        <span className="text-[#03A64A] italic text-2xl">Catálogo Premium</span>
                    </h2>
                    <p className="text-zinc-500 text-sm mt-2 font-medium">Insira suas credenciais para continuar.</p>
                </div>

                <form ref={formRef} action={formAction} className="relative z-10 flex flex-col gap-5">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">
                            Telefone
                        </label>
                        <div className="relative group">
                            <PhoneIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                            <input
                                onInput={handlePhoneChange}
                                maxLength={15}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="(xx) xxxxx-xxxx"
                                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">
                            Senha de Acesso
                        </label>
                        <div className="relative group">
                            <LockKeyIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                            />
                        </div>
                    </div>

                    <AnimatePresence>
                        {formState?.message !== "" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`flex items-center gap-2 ${formState.success ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"} p-3 rounded-xl`}
                            >
                                {formState.success ? <CheckCircleIcon size={18} weight="fill" className="text-green-500" /> : <WarningCircleIcon size={18} weight="fill" className="text-red-500" />}
                                <p className="font-bold text-xs">{formState.message}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={pending}
                        className="cursor-pointer group relative mt-4 h-14 w-full bg-[#03A64A] hover:bg-[#028a3d] text-black font-black uppercase tracking-widest rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                        {pending ? (
                            <Loading />

                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                Entrar
                            </div>
                        )}
                    </button>

                    <p className="text-center text-[10px] text-zinc-600 mt-4 uppercase tracking-[0.1em]">
                        Problemas com o acesso? <span className="text-white cursor-pointer hover:underline">Suporte Técnico</span>
                    </p>
                </form>
            </div>
        </Modal>
    );
}