// Modal.tsx
import React, { useState } from 'react';
import { CloseButton } from '../../public/icons/Icons';

interface TermoProps {
    isVisible: boolean;
    onClose: () => void;
}

const Termo: React.FC<TermoProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
      
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-[1000]">
            <div className="flex flex-col mx-5 h-[500px] bg-white max-w-[902px] lg:h-[698px] px-5 py-5 lg:px-10 lg:py-[34px] rounded-[20px] lg:rounded-[40px] relative w-full h-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] justify-between items-center">
                <div className='hidden lg:flex justify-between w-full pb-[34px]'>
                    <h2 className="Titulo">Termo de Compromisso e Privacidade</h2>
                    <button onClick={onClose} className='flex w-9 h-9 rounded-[50%] bg-[rgba(0,0,0,0.1)] items-center justify-center'>
                        <CloseButton/>
                    </button>
                </div>

								<div className='flex lg:hidden justify-between w-full pb-5'>
                    <h3 className="Titulo">Termo de Compromisso e Privacidade</h3>
                    <button onClick={onClose} className='flex w-9 h-9 rounded-[50%] bg-[rgba(0,0,0,0.1)] items-center justify-center'>
                        <CloseButton/>
                    </button>
                </div>

                <div className='pr-4 overflow-y-auto custom-scrollbar'>
                  <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id augue eget leo vulputate lacinia. Donec et est lacus. Etiam hendrerit quis eros hendrerit mattis. Sed bibendum tellus vitae pellentesque tempor. Aenean aliquet nec lacus in auctor. Pellentesque id elit id quam volutpat rhoncus vel et leo. Quisque vel ex vel ex tincidunt ornare sit amet sed enim. Praesent rutrum lacinia sapien, et dictum mi. Praesent eleifend, enim sed mattis pretium, nunc mi blandit orci, nec interdum massa sem nec est. Nullam pharetra sapien at tortor efficitur, egestas ullamcorper quam congue. Cras leo nisi, malesuada ac libero nec, vehicula tristique mauris.</p>

                  <p className='mb-6'>Donec ante libero, iaculis id eleifend sed, sagittis non mauris. Aenean faucibus lectus neque, feugiat malesuada nisi suscipit non. Nunc sed dignissim eros, blandit elementum orci. Nam non velit turpis. Morbi ac nisi eu erat auctor congue. Suspendisse potenti. Vestibulum et mi eu odio vestibulum porta sed at felis. Nullam iaculis tortor nibh, nec interdum tellus varius suscipit. Etiam id cursus tortor. In pulvinar ex eget imperdiet tempor.</p>

                  <p className='mb-6'>Sed sit amet lectus risus. Integer auctor ipsum sed ligula imperdiet, nec condimentum orci consequat. Duis turpis orci, faucibus a dui congue, ullamcorper congue enim. Pellentesque sodales hendrerit tortor vitae placerat. Fusce rhoncus diam id mi gravida auctor. Duis quis porta neque. Donec vulputate est non blandit porttitor. Nulla cursus sem facilisis malesuada euismod. Sed non urna vitae sem egestas molestie ut non sem. Aliquam erat volutpat. Fusce faucibus est tellus. Sed sit amet scelerisque lacus. Maecenas semper risus velit, a dapibus velit eleifend sed. Nulla pellentesque ligula orci, eu cursus purus dictum vel. Integer blandit, tellus non dignissim molestie, ex ipsum auctor massa, eu mattis sem augue at sapien.</p>

                  <p className='mb-6'>Suspendisse pretium neque ex, et pretium lorem commodo eget. Maecenas quis pretium dolor. Suspendisse porta finibus arcu id molestie. Sed mi neque, porttitor ac libero in, cursus posuere est. Aenean bibendum sit amet urna et faucibus. Donec ullamcorper tempus porta. Cras vulputate lectus ac viverra suscipit. Proin molestie magna at mauris ornare condimentum. Nunc sagittis velit sit amet elit rutrum, sed porttitor elit feugiat. Phasellus eget tempus mauris, accumsan venenatis metus. Aliquam facilisis gravida pellentesque. Proin commodo arcu ut libero pellentesque volutpat. Aliquam malesuada metus eget dui dictum aliquam.</p>

                  <p className='mb-6'>Phasellus fermentum id nisl ullamcorper sagittis. Fusce congue vulputate bibendum. In hac habitasse platea dictumst. Suspendisse a turpis nunc. Suspendisse mollis pellentesque lacus a faucibus. In nec vestibulum lacus. Ut sollicitudin, libero vitae maximus congue, leo felis molestie ipsum, sit amet blandit neque mauris vel massa. Sed vulputate scelerisque felis a placerat. Aenean aliquet erat eget tortor condimentum dignissim. In viverra, tortor nec lobortis luctus, quam nisl pulvinar urna, vel luctus erat turpis a lorem. Aliquam ante ex, consequat vel nibh sed, egestas tempus leo. Aliquam sed eros sed enim ultrices venenatis eu in nulla.</p>
                </div>

                
            </div>
        </div>
    );
};

export default Termo;