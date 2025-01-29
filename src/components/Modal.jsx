import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { usePokemonModal } from "../hooks/usePokemonModal";
import { getTypeIconSrc } from "../utils/pokemon-helper";
import { usePokemonStore } from "../store/usePokemonStore";

const Modal = () => {
  // const {   currentPokemon } = usePokemonModal();

  const { value, closeModal } = usePokemonStore();

  return (
    <Dialog.Root
      open={value.isModalOpen}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />

        <Dialog.Content
          className={`modal ${value.pokemon?.types[0]?.name}`}
          data-content={value.pokemon?.name}
        >
          <div className="pokemon-intro">
            <a className="arrow-back" onClick={closeModal}></a>

            <div className="current-pokemon">
              <img src={value.pokemon?.imgSrc} alt="Pokemon-Image" />

              <div>
                <span className="id-number">#{value.pokemon?.paddedId}</span>
                <span className="pokemon-name">{value.pokemon?.name}</span>

                <div className="types">
                  {value.pokemon?.types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                      <div key={name} className={name}>
                        <img src={typeImg} alt={name} />
                        <span className="type-name">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="data-container">
            <h4>포켓몬 정보</h4>

            <table>
              <tbody>
                <tr>
                  <td className="category">베이스 정보</td>
                  <td>
                    <ol>키: {value.pokemon?.height}</ol>
                    <ol>몸무게: {value.pokemon?.weight}</ol>
                  </td>
                </tr>

                <tr>
                  <td className="category">포켓몬 능력</td>
                  <td>
                    <ol>
                      {value.pokemon?.abilities.map(
                        ({ ability, is_hidden }) => {
                          if (is_hidden) {
                            return (
                              <small key={ability.name}>
                                {ability.name} (hidden ability)
                              </small>
                            );
                          }

                          return <li key={ability.name}>{ability.name}</li>;
                        }
                      )}
                    </ol>
                  </td>
                </tr>

                <tr>
                  <td className="category">포켓몬 타입</td>
                  <td>
                    {value.pokemon?.types.map(({ name }) => {
                      const typeImage = getTypeIconSrc(name);

                      return (
                        <img
                          key={name}
                          className={name}
                          src={typeImage}
                          alt={name}
                        />
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
