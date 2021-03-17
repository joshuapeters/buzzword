const applyStyles = () => {
  const elements = document.querySelectorAll(".last-line");
  const nameElement = "last-line-element";
  const nameRow = "last-line-row";

  const wrapAll = (nodes, wrapper, elem) => {
    const parent = nodes[0].parentNode;
    const { previousSibling } = nodes[0];
    for (
      let i = 0;
      nodes.length - i;
      wrapper.firstChild === nodes[0] && (i += 1)
    ) {
      wrapper.appendChild(nodes[i]);
    }
    if (previousSibling) {
      parent.insertBefore(wrapper, previousSibling.nextSibling);
    } else {
      elem.appendChild(wrapper);
    }
    return wrapper;
  };

  const findLastRow = (elem) => {
    const content = elem.innerText.trim();
    const contentArr = content.split(" ");
    let contentFormatted = "";
    contentArr.forEach((item) => {
      contentFormatted += `<span>${item} </span>`;
    });
    const element = elem;
    element.innerHTML = contentFormatted;

    const childrenSpan = Array.from(elem.getElementsByTagName("span"));
    let top = 0;
    childrenSpan.forEach((item) => {
      const thisTop = item.offsetTop;
      if (thisTop === top) {
        item.classList.add(nameElement);
      } else {
        childrenSpan.forEach((el) => {
          el.classList.remove(nameElement);
        });
        top = thisTop;
        item.classList.add(nameElement);
      }
    });

    const wrapElements = element.querySelectorAll(`.${nameElement}`);
    const wrapper = document.createElement("span");
    wrapper.classList.add(nameRow);
    wrapAll(wrapElements, wrapper, elem);
  };

  const findLastRows = () => {
    elements.forEach((elem) => {
      findLastRow(elem);
    });
  };

  findLastRows();
};

export const LastLine = {
  applyStyles: applyStyles,
};
