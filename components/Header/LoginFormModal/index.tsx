import { useActionState } from "react";
import { Modal } from "../../Modal";
import { XIcon } from "@phosphor-icons/react";
import { signInAction } from "@/actions/signActions";
import { handlePhoneChange } from "@/utils/phoneMask";

interface LoginModalFormProps {
    loginModalOpen: boolean;
    setLoginModalOpen: (value: boolean) => void;
}

export function LoginFormModal({ loginModalOpen, setLoginModalOpen }: LoginModalFormProps) {
    const [formState, formAction, pending] = useActionState(signInAction, { success: false });

    return (
        <>
            <Modal isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} maxWidth="max-w-[500px]">
                <div className="text-black p-4">
                    <h2 className="text-xl text-center font-semibold mb-12">Faça login para <br /> acessar o catálogo</h2>
                    <XIcon size={24} onClick={() => setLoginModalOpen(false)} className="absolute top-4 right-4 cursor-pointer" />
                    <form action={formAction} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="phoneNumber" className="font-semibold">Telefone</label>
                            <input onInput={handlePhoneChange} maxLength={15} type="text" name="phoneNumber" className="input" id="phoneNumber" placeholder="(xx) xxxxx-xxxx" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="password" className="font-semibold">Senha</label>
                            <input type="password" name="password" className="input" id="password" placeholder="********" />
                        </div>
                        {formState?.success === false && (
                            <p className="text-red-500 text-center font-extrabold text-sm">{formState.message}</p>
                        )}
                        <button type="submit" className="btn-primary mt-3">{pending ? 'Entrando...' : 'Entrar'}</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}