import { useActionState } from "react";
import { Modal } from "../../Modal";
import { XIcon } from "@phosphor-icons/react";
import { signInAction } from "@/actions/signActions";
import { handlePhoneChange } from "@/utils/phoneMask";
import { useUIStore } from "@/stores/useUIStore";
import { Loading } from "@/components/Loading";
import { useUserStore } from "@/stores/useUserStore";

export function LoginFormModal() {
    const { loginModalOpen, closeLoginModal } = useUIStore();
    const { refreshUser } = useUserStore();

    const [formState, formAction, pending] = useActionState(handleSignIn, { success: false });

    async function handleSignIn(prevState: any, formData: FormData) {
        const result = await signInAction(prevState, formData);
        if (result.success) {
            closeLoginModal();
            refreshUser();
        }

        return result;
    }

    return (
        <>
            <Modal isOpen={loginModalOpen} setIsOpen={closeLoginModal} maxWidth="max-w-[500px]">
                <div className="text-black p-4">
                    <h2 className="text-xl text-center font-semibold mb-12">Faça login para <br /> acessar o catálogo</h2>
                    <XIcon size={24} onClick={closeLoginModal} className="absolute top-4 right-4 cursor-pointer" />
                    <form action={formAction} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="phone" className="font-semibold">Telefone</label>
                            <input onInput={handlePhoneChange} maxLength={15} type="text" name="phone" className="input" id="phone" placeholder="(xx) xxxxx-xxxx" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="password" className="font-semibold">Senha</label>
                            <input type="password" name="password" className="input" id="password" placeholder="********" />
                        </div>
                        {formState?.success === false && (
                            <p className="text-red-500 text-center font-extrabold text-sm">{formState.message}</p>
                        )}
                        <button type="submit" className="cursor-pointer btn-secondary mt-3">{pending ? <Loading /> : 'Entrar'}</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}