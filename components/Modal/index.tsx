
interface ModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    maxWidth?: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, setIsOpen, maxWidth, children }: ModalProps) {
    return (
        <>
            {isOpen &&
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
                    <div className={`relative bg-white rounded-lg ${maxWidth} w-full`}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}